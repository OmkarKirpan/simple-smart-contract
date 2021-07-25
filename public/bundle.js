var contractABI = [];
var contractAddress = '0xAF183E27799593F5caAf02b26526A0a7a8200787';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
