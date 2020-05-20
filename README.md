# Udacity Blockchain Capstone

## Decentralized Real Estate Marketplace project for Udacity nanodegree program
This repository contains Ethereum smart-contracts that are meant to be used together with an instance of Zokrates to create Non Fungible Tokens for the properties you own.

This repository is just a proof of concept that only covers the requirements of the Udacity nanodegree program.


# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Please make sure you've already installed ganache-cli, Truffle, Node.js, 
npm package manager, Docker and git.

#### Ganache Prerequisites
Ganache must be running on the local machine on port 8545. For ganache-cli you can use:
```
ganache-cli -a 50 -e 1000 -p 8545
```

## Installing

1. Clone this repository
2. cd into the folder\
3. Install using `npm install`\
4. aunch Ganache with the settings described above\
5. Launch the Zokrates Docker container `docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates:0.3.0 /bin/bash` \
6. In Zokrates's console compile the square.code `~/zokrates compile -i square.code`\
7. Then run the zokrates setup command `~/zokrates setup`\
8. Run the compute-witness command with a number and it's square`~/zokrates compute-witness -a 3 9`\
9. Ask Zokrates to generate the proof `~/zokrates generate-proof`\
10. Finally tell Zokrates to generate the smart-contract `~/zokrates export-verifier`\
11. Copy the generated `verifier.sol` to the `eth-contracts/contracts` folder \
12. cd into the eth-contracts folder `cd eth-contracts`
13. Compile all the smart-contracts: `truffle compile`\
14. Run all the tests `truffle test`\
** All the tests should pass **


## Deploy on Rinkeby
To deploy on the Rinkeby network run `truffle migrate --network rinkeby --reset`

## Contract address on Rinkeby
0x88Ee951b004508bD63Abfd73CAb9DdF0cb286456

## Account Address
0x3B3C254e206f45b7c8b2Fff2DCf390A007E0c5E1

## OpenSea
Visit the page: https://rinkeby.etherscan.io/address/0x88ee951b004508bd63abfd73cab9ddf0cb286456


## OpenSea Token Listing/Selling
Visit This Page: https://rinkeby.opensea.io/assets/fox-estate-marketplace


# Built With
+ Ethereum - Ethereum is a decentralized platform that runs smart contracts
+ IPFS - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.
+ Truffle Framework - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
+ openzeppelin-solidity
+ truffle-assertions
+ Solidity
+ Ganache-cli


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


### Contract Abi
`
[
      {
         "inputs":[
            {
               "internalType":"address",
               "name":"verifierAddress",
               "type":"address"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"constructor"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":true,
               "internalType":"address",
               "name":"owner",
               "type":"address"
            },
            {
               "indexed":true,
               "internalType":"address",
               "name":"approved",
               "type":"address"
            },
            {
               "indexed":true,
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"Approval",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":true,
               "internalType":"address",
               "name":"owner",
               "type":"address"
            },
            {
               "indexed":true,
               "internalType":"address",
               "name":"operator",
               "type":"address"
            },
            {
               "indexed":false,
               "internalType":"bool",
               "name":"approved",
               "type":"bool"
            }
         ],
         "name":"ApprovalForAll",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":false,
               "internalType":"address",
               "name":"_theOwner",
               "type":"address"
            }
         ],
         "name":"NewOwner",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":false,
               "internalType":"address",
               "name":"caller",
               "type":"address"
            }
         ],
         "name":"Paused",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":false,
               "internalType":"address",
               "name":"solutioner",
               "type":"address"
            }
         ],
         "name":"SolutionAdded",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":true,
               "internalType":"address",
               "name":"from",
               "type":"address"
            },
            {
               "indexed":true,
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "indexed":true,
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"Transfer",
         "type":"event"
      },
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":false,
               "internalType":"address",
               "name":"caller",
               "type":"address"
            }
         ],
         "name":"Unpaused",
         "type":"event"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"bytes32",
               "name":"_myid",
               "type":"bytes32"
            },
            {
               "internalType":"string",
               "name":"_result",
               "type":"string"
            }
         ],
         "name":"__callback",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"bytes32",
               "name":"_myid",
               "type":"bytes32"
            },
            {
               "internalType":"string",
               "name":"_result",
               "type":"string"
            },
            {
               "internalType":"bytes",
               "name":"_proof",
               "type":"bytes"
            }
         ],
         "name":"__callback",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"approve",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"address",
               "name":"owner",
               "type":"address"
            }
         ],
         "name":"balanceOf",
         "outputs":[
            {
               "internalType":"uint256",
               "name":"",
               "type":"uint256"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[

         ],
         "name":"baseTokenURI",
         "outputs":[
            {
               "internalType":"string",
               "name":"baseTokenURI",
               "type":"string"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"getApproved",
         "outputs":[
            {
               "internalType":"address",
               "name":"",
               "type":"address"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[

         ],
         "name":"getOwner",
         "outputs":[
            {
               "internalType":"address",
               "name":"_theOwner",
               "type":"address"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"address",
               "name":"owner",
               "type":"address"
            },
            {
               "internalType":"address",
               "name":"operator",
               "type":"address"
            }
         ],
         "name":"isApprovedForAll",
         "outputs":[
            {
               "internalType":"bool",
               "name":"",
               "type":"bool"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            },
            {
               "internalType":"string",
               "name":"tokenURI",
               "type":"string"
            }
         ],
         "name":"mint",
         "outputs":[
            {
               "internalType":"bool",
               "name":"",
               "type":"bool"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[

         ],
         "name":"name",
         "outputs":[
            {
               "internalType":"string",
               "name":"name",
               "type":"string"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"ownerOf",
         "outputs":[
            {
               "internalType":"address",
               "name":"",
               "type":"address"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"from",
               "type":"address"
            },
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"safeTransferFrom",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"from",
               "type":"address"
            },
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            },
            {
               "internalType":"bytes",
               "name":"_data",
               "type":"bytes"
            }
         ],
         "name":"safeTransferFrom",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"bool",
               "name":"approved",
               "type":"bool"
            }
         ],
         "name":"setApprovalForAll",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"bool",
               "name":"_isPaused",
               "type":"bool"
            }
         ],
         "name":"setPaused",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"bytes4",
               "name":"interfaceId",
               "type":"bytes4"
            }
         ],
         "name":"supportsInterface",
         "outputs":[
            {
               "internalType":"bool",
               "name":"",
               "type":"bool"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[

         ],
         "name":"symbol",
         "outputs":[
            {
               "internalType":"string",
               "name":"symbol",
               "type":"string"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"uint256",
               "name":"index",
               "type":"uint256"
            }
         ],
         "name":"tokenByIndex",
         "outputs":[
            {
               "internalType":"uint256",
               "name":"",
               "type":"uint256"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"address",
               "name":"owner",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"index",
               "type":"uint256"
            }
         ],
         "name":"tokenOfOwnerByIndex",
         "outputs":[
            {
               "internalType":"uint256",
               "name":"",
               "type":"uint256"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"tokenURI",
         "outputs":[
            {
               "internalType":"string",
               "name":"",
               "type":"string"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":true,
         "inputs":[

         ],
         "name":"totalSupply",
         "outputs":[
            {
               "internalType":"uint256",
               "name":"",
               "type":"uint256"
            }
         ],
         "payable":false,
         "stateMutability":"view",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"from",
               "type":"address"
            },
            {
               "internalType":"address",
               "name":"to",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"tokenId",
               "type":"uint256"
            }
         ],
         "name":"transferFrom",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"newOwner",
               "type":"address"
            }
         ],
         "name":"transferOwnership",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"uint256",
               "name":"index",
               "type":"uint256"
            },
            {
               "internalType":"address",
               "name":"solutioner",
               "type":"address"
            }
         ],
         "name":"addSolution",
         "outputs":[

         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "internalType":"address",
               "name":"Address",
               "type":"address"
            },
            {
               "internalType":"uint256",
               "name":"Id",
               "type":"uint256"
            },
            {
               "internalType":"uint256[2]",
               "name":"a",
               "type":"uint256[2]"
            },
            {
               "internalType":"uint256[2][2]",
               "name":"b",
               "type":"uint256[2][2]"
            },
            {
               "internalType":"uint256[2]",
               "name":"c",
               "type":"uint256[2]"
            },
            {
               "internalType":"uint256[2]",
               "name":"input",
               "type":"uint256[2]"
            }
         ],
         "name":"mintNewNFT",
         "outputs":[
            {
               "internalType":"bool",
               "name":"",
               "type":"bool"
            }
         ],
         "payable":false,
         "stateMutability":"nonpayable",
         "type":"function"
      }
   ]
`




