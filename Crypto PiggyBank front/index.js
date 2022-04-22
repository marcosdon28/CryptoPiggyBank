
// Elements
const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');
const connectWalletBtn = document.getElementById('connect');
const walletLabel = document.getElementById('wallet');
const amount = document.getElementById('amount');
const confirmWithdraw = document.getElementById('btn-confirmWithdraw');
const confirmDeposit = document.getElementById('btn-confirmDeposit');
const yourWallet = document.getElementById('your-wallet');


function connectWallet(){
    walletLabel.style.display = 'initial';
    yourWallet.style.display = 'initial';

}
function hideDepo(){
    confirmWithdraw.style.display = 'initial'
    confirmDeposit.style.display = 'none' 
}

function hideWithdraw(){
    confirmWithdraw.style.display = 'none'
    confirmDeposit.style.display = 'initial' 

}
//function usages
connectWalletBtn.onclick = connectWallet;
withdrawBtn.onclick= hideDepo;
depositBtn.onclick = hideWithdraw;