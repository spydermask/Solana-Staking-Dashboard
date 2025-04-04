
const express = require('express');
const { Connection, clusterApiUrl } = require('@solana/web3.js');
const app = express();
const port = 3000;

const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

app.get('/staking-data', async (req, res) => {
    const validators = await connection.getVoteAccounts();
    res.json(validators);
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
