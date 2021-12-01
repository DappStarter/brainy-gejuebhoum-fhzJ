require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name recipe noble exchange grace battle bridge twin'; 
let testAccounts = [
"0xd26f60f5e6d649943cb5a0faa65215331c36d54e9c55c24ac875c98246f0ecd9",
"0x09931a21e7d7ee0a0e6c955fc0ada05f9af954c53283fbf23a5bf5e5212849af",
"0xc86f0638c71e3de1790445861d30b61421d1d0f14450bcb2058a52483132c702",
"0x72bc6351895e55e9ba0c8d8a3a90f0e3a4d8a9bab4f7f53fa12688f25dbb3c1a",
"0x6f316d8568a1cf28ea3e66be8094d1190b3c5853c0b0427873ce46db1f15298a",
"0xd0bcca1256464fd5fff81bac7489886519ca0c49a979031dc60d2525040df3eb",
"0x77343a1760a7c4158141bff50d054aae7ed2b018afc50628038f693e60941e64",
"0xb93fe0e0e9de026af9643e417d4c68c12ccc05e466945d6f362633e641bfedf2",
"0x18db5ed7e9443685d462d62846c3bfdedf919293ae8c95d12c16d9bb7da968c4",
"0x101e4bb5fd1dfff40799eacbc2fecdb50f5d4ea3c777c2322edba5102dd70919"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


