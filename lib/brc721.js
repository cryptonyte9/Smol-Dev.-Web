const bitcoin = require('./bitcoin');

class BRC721 {
  constructor() {
    this.tokenId = 0;
    this.tokenOwners = {};
  }

  mintToken(ownerAddress) {
    this.tokenId += 1;
    this.tokenOwners[this.tokenId] = ownerAddress;
    return this.tokenId;
  }

  inscribeToken(tokenId, message) {
    if (!this.tokenOwners[tokenId]) {
      throw new Error('Token does not exist');
    }

    const transaction = bitcoin.createTransaction({
      toAddress: this.tokenOwners[tokenId],
      amount: 0,
      data: message
    });

    return transaction;
  }
}

module.exports = new BRC721();