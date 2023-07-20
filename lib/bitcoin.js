const bitcoin = require('bitcoinjs-lib');
const dotenv = require('dotenv');

dotenv.config();

const NETWORK = bitcoin.networks.testnet; // Use testnet for development

const createBitcoin = () => {
  const keyPair = bitcoin.ECPair.makeRandom({ network: NETWORK });
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: NETWORK });

  return {
    keyPair,
    address,
  };
};

const signTransaction = (transaction, keyPair) => {
  const txb = new bitcoin.TransactionBuilder(NETWORK);
  txb.addInput(transaction.txId, transaction.vout);
  txb.addOutput(transaction.toAddress, transaction.amount);
  txb.sign(0, keyPair);

  return txb.build().toHex();
};

module.exports = {
  createBitcoin,
  signTransaction,
};