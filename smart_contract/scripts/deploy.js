const hre = require('hardhat');

async function main() {
  const Willow = await hre.ethers.getContractFactory('Willow');
  const willow = await Willow.deploy(
    'Willow Blog',
    'BLOG',
    '200000000000000000' //0.2 MATIC
  );

  await willow.deployed();

  console.log('Willow deployed to:', willow.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
