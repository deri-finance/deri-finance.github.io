
BigNumber.config({
    DECIMAL_PLACES: 18,
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
    EXPONENTIAL_AT: 256
});
function bg(value, base = 0) {
    if (base == 0) {
        return BigNumber(value);
    } else if (base > 0) {
        return BigNumber(value).times(BigNumber('1' + '0'.repeat(base)));
    } else {
        return BigNumber(value).div(BigNumber('1' + '0'.repeat(-base)));
    }
}

function deri_natural(value) {
    return bg(value, -18);
}

function natural_deri(value) {
    return bg(value, 18).toFixed(0).toString();
}

function max(value1, value2) {
    if (value1.gte(value2)) {
        return value1;
    } else {
        return value2;
    }
}

function min(value1, value2) {
    if (value1.lte(value2)) {
        return value1;
    } else {
        return value2;
    }
}


 class Chain {

    constructor() {
        this.web3 = null;
        this.ethereum = null;
        this.account = null;

        this.oracleUrl = null;
        this.addresses = null;
        this.abifiles = null;
        this.methods = null;

        this.pool = null;
        this.bToken = null;
        this.pToken = null;
        this.lToken = null;
        this.Vault = null;

        this.symbol = null;
        this.bSymbol = null;
        this.bDecimals = null;

        this.multiplier = null;
        this.feeRatio = null;
        this.minPoolMarginRatio = null;
        this.minInitialMarginRatio = null;
        this.minMaintenanceMarginRatio = null;
        this.minAddLiquidity = null;
        this.redemptionFeeRatio = null;
        this.fundingRateCoefficient = null;
        this.minLiquidationReward = null;
        this.maxLiquidationReward = null;
        this.liquidationCutRatio = null;
        this.priceDelayAllowance = null;
        this.chanId = null;

        this.tradeDeriInfo = null;

        this.oracle = {};
        this.balance = {};
        this.position = {
            volume: bg(0),
            cost: bg(0),
            lastCumuFundingRate: bg(0),
            margin: bg(0),
            lastUpdateTimestamp: bg(0)
        };
        this.states = {};
    }

    async connectWallet() {
        if (typeof window.ethereum != undefined) {
            this.web3 = new Web3(ethereum);
            this.ethereum = window.ethereum;
            this.account = (await ethereum.request({ method: 'eth_requestAccounts' }))[0];
            return { success: true, account: this.account };
        } else {
            return { success: false, error: 'Cannot connect wallet' };
        }
    }
    async liquidateEvent() {
        return await this.pool.getPastEvents("Liquidate", {
            filter: {owner:this.account}, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0,
            toBlock: 'latest'
           }, function (error, events) {
            return events;
           });
    }
    async initialize(index = 0,type) {
        await this._initializeContracts(index,type);
        await this._initializeParameters();
        await Promise.all([
            this._updateBalance(),
            this._updatePosition(),
            this._updateStates(),
            this._updateOracle(),
            this._bindEvent(),
            this._poolData(),
            this._tradeDeri()
        ]);
    }

    //================================================================================
    // Interfaces
    //================================================================================

    async getSpecification() {
        return {
            addresses: this.addresses,
            symbol: this.symbol,
            bSymbol: this.bSymbol,
            multiplier: this.multiplier.toString(),
            feeRatio: this.feeRatio.toString(),
            minPoolMarginRatio: this.minPoolMarginRatio.toString(),
            minInitialMarginRatio: this.minInitialMarginRatio.toString(),
            minMaintenanceMarginRatio: this.minMaintenanceMarginRatio.toString(),
            minAddLiquidity: this.minAddLiquidity.toString(),
            redemptionFeeRatio: this.redemptionFeeRatio.toString(),
            fundingRateCoefficient: this.fundingRateCoefficient.toString(),
            minLiquidationReward: this.minLiquidationReward.toString(),
            maxLiquidationReward: this.maxLiquidationReward.toString(),
            liquidationCutRatio: this.liquidationCutRatio.toString(),
            priceDelayAllowance: this.priceDelayAllowance.toString()
        }
    }

    async getPositionInfo() {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        return {
            volume: this.position.volume.toString(),
            averageEntryPrice: this._calculateEntryPrice(price).toString(),
            margin: this.position.margin.toString(),
            marginHeld: this._calculateMarginHeld(price).toString(),
            pnl: this._calculatePnl(price).toString(),
            liquidationPrice: this._calculateLiquidationPrice(price).toString()
        }
    }

    async getLiquidityInfo() {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        return {
            poolLiquidity: this.states.liquidity.toString(),
            shares: this.balance.ltoken.toString(),
            shareValue: this._calculateShareValue(price).toString(),
            maxRemovableShares: this._calculateMaxRemovableShares(price).toString()
        }
    }

    async getWalletBalance() {
        return this.balance.btoken.toString();
    }
    
    async isUnlocked() {
        let allowance = await this._call(this.bToken, 'allowance', [this.account, this.addresses.pool]);
        allowance = deri_natural(allowance);
        return allowance.gt(0);
    }

    async getEstimatedMargin(volume, leverage) {
        let price = deri_natural(this.oracle.price);
        return bg(volume).abs().times(price).times(this.multiplier).div(bg(leverage)).toString();
    }

    async getEstimatedFee(volume) {
        let price = deri_natural(this.oracle.price);
        return bg(volume).abs().times(price).times(this.multiplier).times(this.feeRatio).toString();
    }

    async unlock() {
        let res;
        try {
            let tx = await this._transact(this.bToken, 'approve', [this.addresses.pool, 0]);
            res = { success: true, transaction: tx };
        } catch (err) {
            res = { success: false, error: err };
        }
        return res;
    }

    async depositMargin(amount) {
        await this._updateOracle();
        let res;
        try {
            let tx = await this._transactPool(this.pool, 'depositMargin', [natural_deri(amount)]);
            res = { success: true, transaction: tx };
        } catch (err) {
            res = { success: false, error: err };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }

    async withdrawMargin(amount) {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        if (bg(amount).lte(this._calculateMaxWithdrawMargin(price))) {
            try {
                let tx = await this._transactPool(this.pool, 'withdrawMargin', [natural_deri(amount)]);
                res = { success: true, transaction: tx };
            } catch (err) {
                res = { success: false, error: err };
            }
        } else {
            res = { success: false, error: 'amount exceeds allowed' };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }
    format(bigNumber) {
        return bigNumber.toFormat().replaceAll(",", "").toString();
    }
    async mint(account, amount) {
        console.log(account)
        let BONE = 10 ** this.bDecimals
        amount = this.format(new BigNumber(amount).multipliedBy(BONE));
        console.log("amount", amount);
        let res;
        try {
            let tx = await this._transact(this.bToken, 'mint', [account, amount])
            res = {success: true, transaction: tx};
        } catch (error) {
            res = {success: false, error: error};
        }
        return res
    }
    async addLiquidity(amount) {
        await this._updateOracle();
        let res;
        try {
            let tx = await this._transactPool(this.pool, 'addLiquidity', [natural_deri(amount)]);
            res = { success: true, transaction: tx };
        } catch (err) {
            res = { success: false, error: err };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updateStates()]);
        }
        return res;
    }

    async removeLiquidity(shares) {
        console.log(shares)
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        if (bg(shares).lte(this._calculateMaxRemovableShares(price))) {
            try {
                let tx = await this._transactPool(this.pool, 'removeLiquidity', [natural_deri(shares)]);
                res = { success: true, transaction: tx };
            } catch (err) {
                res = { success: false, error: err };
            }
        } else {
            res = { success: false, error: 'shares exceeds allowed' };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updateStates()]);
        }
        return res;
    }

    async tradeWithMargin(volume, amount) {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        let orderValidation = this._isOrderValid(price, bg(volume), bg(amount));
        if (orderValidation.success) {
            try {
                let tx = await this._transactPool(this.pool, 'tradeWithMargin', [natural_deri(volume), natural_deri(amount)]);
                res = { success: true, transaction: tx };
            } catch (err) {
                res = { success: false, error: err };
            }
        } else {
            res = { success: false, error: orderValidation.message };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }

    async closePosition() {
        let volume = this.position.volume.negated();
        let res;
        if (!volume.eq(0)) {
            try {
                let tx = await this._transactPool(this.pool, 'tradeWithMargin', [natural_deri(volume), '0']);
                res = { success: true, transaction: tx };
            } catch (err) {
                res = { success: false, error: err };
            }
        } else {
            res = { success: false, error: 'no position to close' };
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }
    async getfundingrate(){
        let tradersNetVolume = this.states.tradersNetVolume.toString() ;
        let price = deri_natural(this.oracle.price).toString();
        let multiplier = this.multiplier.toString();
        let liquidity = this.states.liquidity.toString();
        let fundingRateCoefficient = this.fundingRateCoefficient.toString();
        let fundingrate = ((tradersNetVolume*price*multiplier)/liquidity)*fundingRateCoefficient
       
        let p = Math.floor(Math.log(fundingrate)/Math.LN10);
        let n = (fundingrate * Math.pow(10, -p)).toFixed(4);
        fundingrate =  n + 'e' + p;
        return {
            fundingrate:fundingrate,
            tradersNetVolume:tradersNetVolume,
            volume:volume,
            liquidity:liquidity
        }
    }
    async userData(){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.deriDataBaseAbi,this.databaseAddress)
        let info = await  mintContract.methods['userData'](this.account).call()
        this.unclaimed = deri_natural(info.amount).toString();
        this.claimed = deri_natural(info.deriClaimed).toString();
        this.deriHarvested = deri_natural(info.deriHarvested).toString();
        return info;

    }
    async _tradeDeri(){
        let userVolume = await this.userVolume(this.chanId);
        let userHarvest = await this.userHarvest(this.chanId);
        let poolVolume = await this.poolVolume(this.chanId);
        let userClaimedDeri = await this.userClaimedDeri(this.chanId);
        let signatures = await this.signatures(this.chanId);
        console.log(userVolume,userHarvest,poolVolume,userClaimedDeri,signatures)
        let amount = 0;
        if(signatures.valid){
            amount = deri_natural(signatures.amount).toString();
        }
        return this.tradeDeriInfo = {
            userVolume:userVolume,
            userHarvest:userHarvest,
            poolVolume:poolVolume,
            userClaimedDeri:userClaimedDeri,
            amount:amount,
        }
    }
    async signatures(chainID){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.tradeDataBaseAbi,this.tradedatabaseAddress)
        let info = await  mintContract.methods['signatures'](chainID,this.account).call();
        return info
    }
    async userVolume(chainID){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.tradeDataBaseAbi,this.tradedatabaseAddress);
        let nowdata = Date.now();
        console.log(chainID)
        nowdata = (parseInt((nowdata/1000) /3600))*3600;
        let info = await  mintContract.methods['userVolume'](chainID,this.addresses.pool,this.account,nowdata).call();
        return deri_natural(info).toString();
    }
    async userHarvest(chainID){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.tradeDataBaseAbi,this.tradedatabaseAddress);
        let nowdata = Date.now();
        nowdata = (parseInt((nowdata/1000) /3600))*3600;
        let info = await  mintContract.methods['userHarvest'](chainID,this.addresses.pool,this.account,nowdata).call();
        return deri_natural(info).toString();
    }
    async poolVolume(chainID){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.tradeDataBaseAbi,this.tradedatabaseAddress);
        let nowdata = Date.now();
        nowdata = (parseInt((nowdata/1000) /3600))*3600;
        let info = await  mintContract.methods['poolVolume'](chainID,this.addresses.pool,nowdata).call();

        return deri_natural(info).toString();
    }
    async userClaimedDeri(chainID){
        let mintWeb3 = new Web3(this.bsurl);
        let mintContract = new mintWeb3.eth.Contract(this.tradeDataBaseAbi,this.tradedatabaseAddress);
        let info = await  mintContract.methods['userClaimedDeri'](chainID,this.account).call();
        return deri_natural(info).toString();
    }
    async tradeClaim(){
        let signatures = await this.signatures(this.chanId);
        let account = this.account;
        let amount = signatures.amount;
        let deadline = signatures.deadline;
        let nonce = signatures.nonce;
        let v = signatures.v;
        let r = signatures.r;
        let s = signatures.s;
        console.log(this.addresses.MiningVault)
        if(signatures.valid){
            let VaultAbi = await this._readjson(this.abifiles.Vault);
            VaultAbi = VaultAbi.abi
            console.log(VaultAbi)
            this.Vault = new this.web3.eth.Contract(VaultAbi, this.addresses.MiningVault);
            console.log(this.Vault)
            try {
                let gas = 0;
                for (let i = 0; i < 20; i++) {
                    try {
                        gas = await this.Vault.methods.claim(account, amount, deadline,nonce, v, r, s).estimateGas({from: this.account});
                        gas = parseInt(gas * 1.25);
                        break;
                    } catch (err) {
                        
                    }
                }
                if (gas == 0) gas = 532731;
                if (gas > 532731) gas = 532731;
                let tx = await this.Vault.methods.claim(account, amount, deadline,nonce, v, r, s).send({from: this.account, gas: gas});
                return {success: true, transaction: tx};
            } catch (err) {
                console.log(err);
                return {success: false, error: err};
            }
        }else{
            return {success: false,error:''}
        }
        
    }
    async mintDToken() {
        let info = await this.userData();
        let dTokenAbi = await this._readjson(this.abifiles.dToken)
        this.dTokenAbi = dTokenAbi;
        this.dToken = new this.web3.eth.Contract(dTokenAbi, this.addresses.dToken);
        let account = this.account;
        let amount = info.amount;
        let deadline = info.deadline;
        let r = info.r;
        let s = info.s;
        let v = info.v;
        try {
            let gas = 0;
            for (let i = 0; i < 20; i++) {
                try {
                    gas = await this.dToken.methods.mint(account, amount, deadline, v, r, s).estimateGas({from: this.account});
                    gas = parseInt(gas * 1.25);
                    break;
                } catch (err) {
                    
                }
            }
            if (gas == 0) gas = 532731;
            if (gas > 532731) gas = 532731;
            let tx = await this.dToken.methods.mint(account, amount, deadline, v, r, s).send({from: this.account, gas: gas});
            return {success: true, transaction: tx};
        } catch (err) {
            console.log(err);
            return {success: false, error: err};
        }
    }
    async tradeEvent(owner) {
        console.log(owner)
        let filter = {owner: owner};
        let tradeEvents = await this._getPastEvents(this.pool, "Trade", filter);
        let trade_li = [];
        for (let i = 0; i < tradeEvents.length; i++) {
            let item = tradeEvents[i];
            let info = item.returnValues;
            let time_stamp = await this._getTimeStamp(item.blockNumber);
            let tradeVolume = deri_natural(bg(info.tradeVolume));
            let price = deri_natural(bg(info.price));
            let notconal = tradeVolume.abs().times(price).times(this.multiplier).times(this.minInitialMarginRatio);
            let direction = tradeVolume.gt(0) ? "LONG" : "SHORT";
            //time   Direction BaseToken   Price   volume    Notconal    transactionFee
            trade_li.push({
                "direction": direction,
                "baseToken": this.bSymbol,
                "price": deri_natural(info.price).toString(),
                "volume": deri_natural(info.tradeVolume).toString(),
                "notional": notconal.toString(),
                "transactionFee": this._calculateFee(tradeVolume, price),
                "time": (+time_stamp.timestamp) + "000",
            })
        }
        console.log(trade_li);
        return trade_li;
    }
    //================================================================================
    // Calculations
    //================================================================================
    _calculateFee(volume, price) {
        return bg(volume).abs().times(price).times(this.multiplier).times(this.feeRatio).toString();
    }
    async _getBlockInfo(blockNumber) {
        return await this.web3.eth.getBlock(blockNumber);
    }
    //================================================================================
    // Internals
    //================================================================================
    async _getPastEvents(contract, eventName, filter = {},fromBlock=0) {
        let events = Array();
        let toBlock = await this._getBlockInfo('latest');
        toBlock = toBlock.number
        while (fromBlock <= toBlock) {
            let es = await contract.getPastEvents(eventName, {
                filter: filter,
                fromBlock: fromBlock,
                toBlock: fromBlock + 4999
            });
            for (e of es) {
                events.push(e);
            }
            fromBlock += 5000;
        }
        return events;
    }
    async _getTimeStamp(blockNumber) {
        return await this.web3.eth.getBlock(blockNumber);
    }
    async _bindEvent() {
        this.ethereum.on('accountsChanged', (accounts) => {
            window.location.reload();
        })
        this.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        })
    }

    async _call(contract, func, params = []) {
        return await contract.methods[this.methods[func]](...params).call();
    }
    
    async _transact(contract, func, params = []) {
        let gas = 0;
        for (let i = 0; i < 20; i++) {
            try {
                gas = await contract.methods[this.methods[func]](...params).estimateGas({ 'from': this.account });
                gas = parseInt(gas * 1.25);
                break;
            } catch (err) {

            }
        }
        
        if (gas == 0) gas = 532731;
        if (gas>532731) gas = 532731;
        let tx = await contract.methods[this.methods[func]](...params).send({ 'from': this.account, 'gas': gas });
        return tx;
    }

    async _transactPool(contract, func, params = []) {
        let signed = [this.oracle.timestamp, this.oracle.price, this.oracle.v, this.oracle.r, this.oracle.s];
        let gas = 0;
        for (let i = 0; i < 20; i++) {
            try {
                gas = await contract.methods[this.methods[func]](...params, ...signed).estimateGas({ 'from': this.account });
                gas = parseInt(gas * 1.25);
                break;
            } catch (err) {

            }
        }
        if (gas == 0) gas = 532731;
        if (gas>532731) gas = 532731;
        let tx = await contract.methods[this.methods[func]](...params, ...signed).send({ 'from': this.account, 'gas': gas });
        return tx;
    }

    async _readjson(filename) {
        let response = await fetch(`wstatic/config/${filename}`);
        return await response.json();
    }
    async _initializeContracts(index,type) {
        try {
            let config = await this._readjson('config.json');
            this.oracleUrl = config.oracleUrl;
            this.databaseAddress = config.databaseAddress;
            this.deriAddress = config.deriAddress;
            this.deriDataBaseAbi = config.deriDataBaseAbi;
            this.tradeDataBaseAbi = config.tradeDataBaseAbi;
            this.tradedatabaseAddress = config.tradedatabaseAddress;
            this.bsurl = config.bscurl[2];
            this.arrbsurl = config.bscurl;
            this.addresses = config.addresses[type][index];
            this.abifiles = config.abifiles;
            this.methods = config.methods;
            this.chanId = config.addresses[type][index].chanId;
            let [poolAbi, bTokenAbi, pTokenAbi, lTokenAbi,VaultAbi] = await Promise.all([
                this._readjson(this.abifiles.pool),
                this._readjson(this.abifiles.bToken),
                this._readjson(this.abifiles.pToken),
                this._readjson(this.abifiles.lToken),
                this._readjson(this.abifiles.Vault),
            ]);
            
            this.pool = new this.web3.eth.Contract(poolAbi, this.addresses.pool);
            this.bToken = new this.web3.eth.Contract(bTokenAbi, this.addresses.bToken);
            this.pToken = new this.web3.eth.Contract(pTokenAbi, this.addresses.pToken);
            this.lToken = new this.web3.eth.Contract(lTokenAbi, this.addresses.lToken);
        } catch (err) {
            console.log(`Chain: _initializeContracts() error: ${err}`);
        }
    }

    async _initializeParameters() {
        try {
            this.symbol = await this._call(this.pool, 'symbol');
            this.bSymbol = await this._call(this.bToken, 'symbol');
            this.bDecimals = await this._call(this.bToken, 'decimals');
            let p = await this._call(this.pool, 'getParameters');
            this.multiplier = deri_natural(p.multiplier);
            this.feeRatio = deri_natural(p.feeRatio);
            this.minPoolMarginRatio = deri_natural(p.minPoolMarginRatio);
            this.minInitialMarginRatio = deri_natural(p.minInitialMarginRatio);
            this.minMaintenanceMarginRatio = deri_natural(p.minMaintenanceMarginRatio);
            this.minAddLiquidity = deri_natural(p.minAddLiquidity);
            this.redemptionFeeRatio = deri_natural(p.redemptionFeeRatio);
            this.fundingRateCoefficient = deri_natural(p.fundingRateCoefficient);
            this.minLiquidationReward = deri_natural(p.minLiquidationReward);
            this.maxLiquidationReward = deri_natural(p.maxLiquidationReward);
            this.liquidationCutRatio = deri_natural(p.liquidationCutRatio);
            this.priceDelayAllowance = bg(p.priceDelayAllowance);
        } catch (err) {
            console.log(`Chain: _initializeParameters() error: ${err}`);
        }
    }


    //================================================================================
    // Updates
    //================================================================================

    async _poolData(){
        try {
            let mintWeb3 = new Web3(this.bsurl);
            let mintContract = new mintWeb3.eth.Contract(this.deriDataBaseAbi,this.databaseAddress);
            let method;
            if(this.chanId == '1'){
                method = 'poolDataETH'
            }else if(this.chanId == '56'){
                method = 'poolDataBSC'
            }else if(this.chanId == '128'){
                method = 'poolDataHECO'
            }
            let info = await mintContract.methods[method](this.addresses.pool).call()
            console.log(info.apy)
            this.apy = deri_natural(info.apy).toString();
        } catch (error) {
            this.errindex +=1;
            this.bsurl = this.arrbsurl[this.errindex]
            this._poolData();
        }
        
        
    }
    async _updateBalance() {
        try {
            let [btoken, ltoken, ltotal] = await Promise.all([
                this._call(this.bToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'totalSupply')
            ]);
            this.balance.btoken = bg(btoken, -this.bDecimals);
            this.balance.ltoken = deri_natural(ltoken);
            this.balance.ltotal = deri_natural(ltotal);
        } catch (err) {
            console.log(err);
        }
    }

    async _updatePosition() {
        try {
            let p = await this._call(this.pToken, 'getPosition', [this.account]);
            this.position.volume = deri_natural(p[0]);
            this.position.cost = deri_natural(p[1]);
            this.position.lastCumuFundingRate = deri_natural(p[2]);
            this.position.margin = deri_natural(p[3]);
            this.position.lastUpdateTimestamp = bg(p[4]);
        } catch (err) {
            console.log('Chain update position error, using default');
        }
    }

    async _updateStates() {
        try {
            let s = await this._call(this.pool, 'getStateValues');
            this.states.cumuFundingRate = deri_natural(s.cumuFundingRate);
            this.states.cumuFundingRateBlock = bg(s.cumuFundingRateBlock);
            this.states.liquidity = deri_natural(s.liquidity);
            this.states.tradersNetVolume = deri_natural(s.tradersNetVolume);
            this.states.tradersNetCost = deri_natural(s.tradersNetCost);
        } catch (err) {
            console.log(err);
        }
    }

    async _updateOracle() {
        try {
            let res = await fetch(this.oracleUrl);
            this.oracle = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    //================================================================================
    // Calculations
    //================================================================================

    _calculateShareValue(price) {
        return this.balance.ltotal.eq(0) ? bg(0) : this.states.liquidity.div(this.balance.ltotal);
    }

    _calculateMaxRemovableShares(price) {
        let shareValue = this._calculateShareValue();
        let value = this.states.tradersNetVolume.times(price).times(this.multiplier);
        let removable = this.states.liquidity.plus(this.states.tradersNetCost).minus(value).minus(value.abs().times(this.minPoolMarginRatio));
        let shares = max(min(this.balance.ltoken, removable.div(shareValue)), bg(0));
        return shares;
    }

    _calculateEntryPrice(price) {
        return this.position.volume.eq(0) ? bg(0) : this.position.cost.div(this.position.volume).div(this.multiplier);
    }

    _calculateMarginHeld(price) {
        return this.position.volume.abs().times(price).times(this.multiplier).times(this.minInitialMarginRatio);
    }

    _calculatePnl(price) {
        return this.position.volume.times(price).times(this.multiplier).minus(this.position.cost);
    }

    _calculateMaxWithdrawMargin(price) {
        if (this.position.volume.eq(0)) {
            return this.position.margin;
        } else {
            let held = this._calculateMarginHeld(price);
            let pnl = this._calculatePnl(price);
            let withdrawable = max(this.position.margin.plus(pnl).minus(held.times(1.02)), bg(0));
            return withdrawable;
        }
    }

    _calculateLiquidationPrice(price) {
        let tmp = this.position.cost.minus(this.position.margin).div(this.position.volume).div(this.multiplier);
        let res = this.position.volume.gt(0) ? tmp.div(bg(1).minus(this.minMaintenanceMarginRatio)) : tmp.div(bg(1).plus(this.minMaintenanceMarginRatio));
        res = max(res, bg(0));
        return res;
    }

    _isOrderValid(price, volume, amount) {
        let minMargin = this.position.volume.plus(volume).abs().times(price).times(this.multiplier).times(this.minInitialMarginRatio);
        let poolMaxVolume = this.states.liquidity.div(this.minPoolMarginRatio).div(price).div(this.multiplier);
        if (this.position.margin.plus(amount).gte(minMargin)) {
            if (volume.lte(poolMaxVolume.minus(this.states.tradersNetVolume)) &&
                volume.gte(poolMaxVolume.negated().minus(this.states.tradersNetVolume))) {
                return {success: true};
            } else {
                return {success: false, message: 'Pool insufficient liquidity'};
            }
        } else {
            return {success: false, message: 'Trader insufficient margin'};
        }
    }

}

