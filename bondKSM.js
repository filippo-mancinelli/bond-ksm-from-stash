import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Enable } from '@polkadot/extension-dapp';

// Connect to the Polkadot node
const provider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider });

// Set the signer (e.g. using Polkadot JS extension)
await web3Enable('maronno3');
const injector = await web3FromSource('polkadot-js');
api.setSigner(injector.signer);

// Define the amount to bond (in units of KSM)
const amount = 12400000; // 1 KSM = 1.000.000 planck

// Send the bond transaction
const stash = 'EaNqkv87hVL8vvwBcTxeCkECkzRuyFLVtSmrVCDhfj4dNmf';
const controller = 'J18bikgBp5hL4CFTLME72Kn7zQz1Hb221BBbdPpAjUPrW5Q';
const transaction = api.tx.staking.bond(controller, amount, 'Staked');
const result = await transaction.signAndSend(stash);

console.log(`Transaction hash: ${result.status.hash}`);
