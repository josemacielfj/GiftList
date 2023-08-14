const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');


const serverUrl = 'http://localhost:1225';

async function main() {
  // DONE: how do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList);
  
  let data;
  niceList.forEach(async (name, i) => {
    const proof = merkleTree.getProof(i);
    dataToServer = {
      'name': name,
      'proof': proof
    }   
    const { data: gift } = await axios.post(`${serverUrl}/gift`, dataToServer);

    console.log({ gift });
  });
  
}

main();