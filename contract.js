/*global ethereum, MetamaskOnboarding */

/*
The `piggybankContract` is compiled from:

  pragma solidity ^0.4.0;
  contract PiggyBank {

      uint private balance;
      address public owner;

      function PiggyBank() public {
          owner = msg.sender;
          balance = 0;
      }

      function deposit() public payable returns (uint) {
          balance += msg.value;
          return balance;
      }

      function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
          require(msg.sender == owner);
          balance -= withdrawAmount;

          msg.sender.transfer(withdrawAmount);

          return balance;
      }
  }
*/

// const forwarderOrigin = 'http://localhost:9010'
// import MetaMaskOnboarding from '@metamask/onboarding'

const forwarderOrigin = 'http://localhost:9011'

const initialize = () => {
 //Basic Actions Section
 const onboardButton = document.getElementById('connectButton');
 const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

 console.log(onboarding)
console.log("yes")
 //Created check function to see if the MetaMask extension is installed
 const isMetaMaskInstalled = () => {
   //Have to check the ethereum binding on the window object to see if it's installed
   console.log("yes3")
   const { ethereum } = window;
   return Boolean(ethereum && ethereum.isMetaMask);
 };

 //------Inserted Code------\\
 const MetaMaskClientCheck = () => {
   console.log("yes2")
   //Now we check to see if MetaMask is installed
   if (!isMetaMaskInstalled()) {
     //If it isn't installed we ask the user to click to install it
     onboardButton.innerText = 'Click here to install MetaMask!';
   } else {
     //If it is installed we change our button text
     onboardButton.innerText = 'Connect';
   }
 };
 MetaMaskClientCheck();
}
window.addEventListener('DOMContentLoaded', initialize)
