console.log('build Contract');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var contract = null;

var virtuoustradeContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"end_date","type":"uint256"},{"name":"given_link","type":"string"},{"name":"dscr","type":"bytes32"},{"name":"amount","type":"uint256"}],"name":"createDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getEndDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deleteDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getBuyer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDisputesVictim","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_reason","type":"string"},{"name":"_proof","type":"string"},{"name":"_seller","type":"address"}],"name":"openDispute","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDscr","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getLink","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_seller","type":"address"},{"name":"_victim","type":"address"},{"name":"_reason","type":"string"}],"name":"closeDispute","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDisputeStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDisputeReason","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDisputesProof","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"seller_addr","type":"address"}],"name":"confirmDeal","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getDisputeDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_seller","type":"address"}],"name":"getAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"log_uint","type":"event"}]);

var virtuoustrade = virtuoustradeContract.new(
  {
    from: web3.eth.accounts[0],
    data: '0x6060604052734b0897b0513fdc7c541b6d9d7e929c4e5364d2db600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034610000575b611c578061006e6000396000f300606060405236156100e4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631d506888146100e9578063240035e214610177578063424e0c25146101be5780635721e419146101e557806365ea829d146102585780636f9fb98a146102cb5780638615c0ee146102ee5780638b4bc669146103bf5780639d6abe4f1461040e578063a1019717146104c8578063a51cb8e214610575578063d46a0868146105c2578063d8606b6c1461067c578063dd4ebafa14610736578063ebc8c1041461077c578063f5a79767146107c3575b610000565b346100005761015d600480803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919080356000191690602001909190803590602001909190505061080a565b604051808215151515815260200191505060405180910390f35b34610000576101a8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b2a565b6040518082815260200191505060405180910390f35b34610000576101cb610b77565b604051808215151515815260200191505060405180910390f35b3461000057610216600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3461000057610289600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ea8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610000576102d8610f18565b6040518082815260200191505060405180910390f35b34610000576103a5600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f38565b604051808215151515815260200191505060405180910390f35b34610000576103f0600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111e6565b60405180826000191660001916815260200191505060405180910390f35b346100005761043f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611233565b604051808060200182810382528381815181526020019150805190602001908083836000831461048e575b80518252602083111561048e5760208201915060208101905060208303925061046a565b505050905090810190601f1680156104ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100005761055b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611327565b604051808215151515815260200191505060405180910390f35b34610000576105a6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611714565b604051808260ff1660ff16815260200191505060405180910390f35b34610000576105f3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611771565b6040518080602001828103825283818151815260200191508051906020019080838360008314610642575b8051825260208311156106425760208201915060208101905060208303925061061e565b505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576106ad600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611868565b60405180806020018281038252838181518152602001915080519060200190808383600083146106fc575b8051825260208311156106fc576020820191506020810190506020830392506106d8565b505050905090810190601f1680156107285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610762600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061195f565b604051808215151515815260200191505060405180910390f35b34610000576107ad600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b8e565b6040518082815260200191505060405180910390f35b34610000576107f4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611bde565b6040518082815260200191505060405180910390f35b600033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504285101561085a57610000565b60006001026000191660026000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600019161415610b1d578460026000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055508260026000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181600019169055508360026000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a5657805160ff1916838001178555610a84565b82800160010185558215610a84579182015b82811115610a83578251825591602001919060010190610a68565b5b509050610aa991905b80821115610aa5576000816000905550600101610a8d565b5090565b50508160026000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555060019050610b22565b600090505b949350505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490505b919050565b6000600060010260001916600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600019161415610bd85760009050610e38565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506000600102600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181600019169055506020604051908101604052806000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d8d57805160ff1916838001178555610dbb565b82800160010185558215610dbb579182015b82811115610dba578251825591602001919060010190610d9f565b5b509050610de091905b80821115610ddc576000816000905550600101610dc4565b5090565b50506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555060019050610e38565b600090505b90565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b919050565b60003073ffffffffffffffffffffffffffffffffffffffff163190505b90565b600042600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015411156111d55760a060405190810160405280428152602001858152602001600060ff168152602001848152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501600082015181600001556020820151816001019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061106557805160ff1916838001178555611093565b82800160010185558215611093579182015b82811115611092578251825591602001919060010190611077565b5b5090506110b891905b808211156110b457600081600090555060010161109c565b5090565b505060408201518160020160006101000a81548160ff021916908360ff1602179055506060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061112d57805160ff191683800117855561115b565b8280016001018555821561115b579182015b8281111561115a57825182559160200191906001019061113f565b5b50905061118091905b8082111561117c576000816000905550600101611164565b5090565b505060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600190506111df565b600090506111df565b5b9392505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490505b919050565b6020604051908101604052806000815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561131a5780601f106112ef5761010080835404028352916020019161131a565b820191906000526020600020905b8154815290600101906020018083116112fd57829003601f168201915b505050505090505b919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561170c576000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160020160009054906101000a900460ff1660ff161480156114a757508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806114a65750600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b5b15611701576001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160020160006101000a81548160ff021916908360ff16021790555082600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005016001019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061161e57805160ff191683800117855561164c565b8280016001018555821561164c579182015b8281111561164b578251825591602001919060010190611630565b5b50905061167191905b8082111561166d576000816000905550600101611655565b5090565b50508273ffffffffffffffffffffffffffffffffffffffff166108fc600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549081150290604051809050600060405180830381858888f1935050505015156116f857610000565b6001905061170b565b6000905061170b565b5b5b5b9392505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160020160009054906101000a900460ff1690505b919050565b6020604051908101604052806000815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005016001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561185b5780601f106118305761010080835404028352916020019161185b565b820191906000526020600020905b81548152906001019060200180831161183e57829003601f168201915b505050505090505b919050565b6020604051908101604052806000815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005016003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119525780601f1061192757610100808354040283529160200191611952565b820191906000526020600020905b81548152906001019060200180831161193557829003601f168201915b505050505090505b919050565b6000600060010260001916600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546000191614156119bc57610000565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154421115611a0b57610000565b600073ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611aa857610000565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015434111515611af857610000565b33600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050611b89565b5b5b610000565b919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005016000015490505b919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015490505b9190505600a165627a7a7230582007d6e8db80a16c4f59173d8814434c6d47789f9f0ec4b2c1a894ed2ff273173e0029',
    gas: '4700000'
  }, function (e, c){
    contract = c;
    console.log('error: ', e, 'contract: ', contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  })

// Security best practices ftw
function unlockAllAccounts(){
  for (var i = 0; i < web3.eth.accounts.length; i++) {
    web3.personal.unlockAccount(web3.eth.accounts[i], "", 36000);
  }
}

function assert(condition, message) {
  if (!condition) throw message;
}

// We want 3 accounts for our tests
while (web3.eth.accounts.length < 3) {
  console.log("Creating test account...");
  web3.personal.newAccount(""); // Empty passphrase
}

// set defaultAccount
// transactional methods are based on defaultAccount
web3.eth.defaultAccount = web3.eth.accounts[0];


// Security best practices ftw
unlockAllAccounts();

var alice = web3.eth.accounts[0];
var bob = web3.eth.accounts[1];
var carol = web3.eth.accounts[2];

admin.sleepBlocks(1); // block reward for alice

// Alice sends some ether to bob and carol, so everybody will have ether and the possibility to send transactions
web3.eth.sendTransaction({from:alice, to:bob, value: web3.toWei(1, "ether")});
web3.eth.sendTransaction({from:alice, to:carol, value: web3.toWei(1, "ether")});