require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index riot night evil gloom end army genre'; 
let testAccounts = [
"0x7913455f040dad69a57eef68806eacfcac5f7f6bc06fbae7f23f36423d2b5aad",
"0xb8218091378db0574c7dd26ea42bc98bd5a6bb98de5c5ad75c59fbbb1f5baea0",
"0x330d9e4e84582a352751ac0e73e23beeb19d40238458831fc72296db5839dd2e",
"0x173204ba78d839cef64ea63030f1e6bea65fac7d7a2930b125c4e72c914ffc2d",
"0x921175a9130831dd246e9253a42737530833a940c299953d7e3d55ae38b75442",
"0x42ac9b07e7613febd67e1f8cd37f6f2932c9ac7eebb92279e019c68c1b55d52b",
"0x1f087f429db68bbf24f6e4e9159952555dd3978e772f0c13094be254f937d370",
"0xc797f4c15a590ef065cbd57a79541f67937c33310d9c33535510d113a98cb4de",
"0xeb224df580a464fe00aa19aa64a96478d3b0c963a84e40d3a75b2ddbf42d109d",
"0x6d6d5823d70702900ec1040439a4f435656f692b381e22fbf34b5c115ac053b7"
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


