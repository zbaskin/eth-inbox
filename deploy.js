const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const MNEMONIC = /* 12 word mnemonic */;
const INFURA = 'rinkeby.infura.io/v3/ ... ';
const provider = new HDWalletProvider( MNEMONIC, INFURA );
const web3 = new Web3(provider);
const INITIAL_STRING = 'Hello world!'

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: [INITIAL_STRING] })
    .send({ gas:'1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
