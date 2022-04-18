
// Elements
const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');
const connectWalletBtn = document.getElementById('connect');
const walletLabel = document.getElementsById('wallet');
const amount = document.getElementsById('amount');

function selectDepositOption(){

}

function connectWallet(){
    walletLabel.style.display = 'initial';

}

//function usages
connectWalletBtn.onclick = connectWallet;