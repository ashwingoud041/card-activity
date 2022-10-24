export const vestingScheduleAbi = `[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "getBeneficiaryOverview",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "terms",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cliff",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "allocatedAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawnAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct TokenVesting.BeneficiaryOverview[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "claimAllTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]`;
