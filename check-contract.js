const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');

const abi = [
  'function paused() view returns (bool)',
  'function hasMinted(address) view returns (bool)',
  'function merkleRoot() view returns (bytes32)',
  'function owner() view returns (address)'
];

const contract = new ethers.Contract(
  '0xfcd7fd9cbC1db3f6Df77994e5AC1ef512E5Ac87A',
  abi,
  provider
);

(async () => {
  try {
    console.log('🔍 Checking contract state...\n');
    
    const merkleRoot = await contract.merkleRoot();
    const paused = await contract.paused();
    const hasMinted = await contract.hasMinted('0x5F1224c0ab7a550D7e540C845feaD3023151BE91');
    const owner = await contract.owner();
    
    console.log('📊 Contract Information:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Merkle Root:', merkleRoot);
    console.log('Contract Paused:', paused);
    console.log('Address Minted:', hasMinted);
    console.log('Contract Owner:', owner);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('🔬 Diagnostics:');
    if (paused) {
      console.log('❌ CONTRACT IS PAUSED');
      console.log('   → Solution: Call unpause() function\n');
    } else {
      console.log('✅ Contract is NOT paused\n');
    }
    
    if (hasMinted) {
      console.log('❌ ADDRESS ALREADY MINTED NFT');
      console.log('   → Solution: Use different wallet address\n');
    } else {
      console.log('✅ Address has NOT minted yet\n');
    }
    
    if (!paused && !hasMinted) {
      console.log('✅ Contract is ready for minting!');
      console.log('📝 The issue might be with proof verification.');
      console.log('   Check that API merkleRoot matches contract merkleRoot.\n');
    }
    
  } catch (error) {
    console.error('❌ Error checking contract:', error.message);
  }
})();
