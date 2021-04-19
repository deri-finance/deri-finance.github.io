$(function () {
    var address,chainId,pool;
    var contract = new Chain();
    $('.connect').on('click', connectWallet);
    $('#eth').on('click', checketh);
    $('#bsc').on('click', checkbsc);
    $('#heco').on('click', checkheco);
    $('#setallowamce').on('click', setallowance);
    
    function setallowance(){
        let address = $('#placeaddress').val();
        let button = $('#setallowamce');
        console.log(address,chainId)
        if(chainId!=undefined){
            if(address){
                if(address == '0x639a9C2fAe976D089dCcc2ffAE51Ef1dd04B7985' || address == '0x3C2970466635AAeFEd1cfe630D051Fa6D281aEbB' || address == '0x9b404BAB12CE0D5039e7313d9e24f4b5c8E8E8e3'){
                    pool = 0;
                }else if(address == '0x7137cc9f252dc405dadc35F597dA8B32e8653603'){
                    pool = 1;
                }else{
                    alert('Please enter the correct address');
                    return;
                }
                disableButton(button)
                contract.initialize(pool,chainId).then(()=>{
                    contract.unlock().then(res=>{
                        console.log(res)
                        if(!res.success){
                            alert('failure')
                        }else{
                            alert(`Your allowance to the following contract has been set to 0:${address}`);
                        }
                        enableButton(button)
                    })
                })
            }
        }
        
    }
    function checketh(){
        $('.woor').text('');
        $('#setallowamce').attr('disabled',false);
        chainId = 1
        if(ethereum.networkVersion != 1){
            let wrong = `(Wrong Network! Switch to ETHEREUM)`;
            $('.woor').text(wrong);
            $('#setallowamce').attr('disabled',true)   ;   
        }
    }
    function checkbsc(){
        $('.woor').text('');
        $('#setallowamce').attr('disabled',false);
        chainId = 0;
        if(ethereum.networkVersion != 56){
            let wrong = `(Wrong Network! Switch to BSC)`;
            $('.woor').text(wrong)  
            $('#setallowamce').attr('disabled',true)        
        }
    }
    function checkheco(){
        $('.woor').text('');
        $('#setallowamce').attr('disabled',false);
        chainId = 2
        if(ethereum.networkVersion != 128){
            let wrong = `(Wrong Network! Switch to HECO)`;
            $('.woor').text(wrong);     
            $('#setallowamce').attr('disabled',true);     
        }
    }
    connectWallet();
    function connectWallet() {
        contract.connectWallet().then((res) => {
            if (res.success) {
                address = contract.account
                    let account = contract.account;
                    account = account.slice(0, 6) +
                        "***" +
                        account.slice(account.length - 4, account.length);
                    $('#adderss').text(account);
                    $('.connect').hide();
               
            } else {
                alert('Cannot connect wallet')
            }
        })
    }
    function disableButton(button) {
        button.find("span.spinner").show();
        button.attr("disabled", true);
    }
    function enableButton(button) {
        button.find("span.spinner").hide();
        button.attr("disabled", false);
    }
})