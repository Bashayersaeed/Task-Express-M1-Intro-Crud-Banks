const express = require("express");
const app = express();
const port = "8000"

app.use(express.json())

const accounts = require("./accounts")

// const createNewAccount = (data) => {
//     console.log("Creating new accounts", data)
//     return data
// }

// const updateAccount = (currentfunds, newdata) => {
//     console.log('Updating account ${id} with data ${data}')
//     return data
//  }
app.get('/accounts', (req, res) => {
    res.status(200).json(accounts);
});

app.post('/accounts', (req, res) => {
    const id = accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1 ;
    const newAccount = {
        id,
        ...req.body,
        funds: 0,
    };

    accounts.push(newAccount);

    res.status(201).json(newAccount);
});

app.delete('/accounts/:accountId', (req ,res) => {
    const accountId = parseInt(req.params.accountId, 10);

    const accountIndex = accounts.findIndex(account => account.id === accountId);

    if (accountIndex === -1) {
        return res.status(404).json ({ message: "Account not found"});
    }
    accounts.splice(accountIndex, 1);
    res.status(204).send();
});

app.put('/accounts/:accountId', (req, res) => {
    const accountId = parseInt(req.params.accountId, 10);
    
    const account = accounts.find(account => account.id === accountId);
    if (!account) {
        return res.status(404).json({ message: "Account not found"});
    }
    Object.assign(account, req.body);
    res.status(200).json(account);
});
// app.get('/accounts/:accountId', (req,res) => {
//     const { accountId } = req.params
//     const account =accountId.find((account) => account.id == accountId);
//     console.log(acount)
//     if (account) {
//         res.status(200).json(account)
//     } else {
//         res.status(404).json()
//     }
// })

// app.put('/accounts/:accountId', (req,res) => {
//     const { accountId } = req.params
//     const account =accountId.find((account) => account.id == accountId);
//     console.log(acount)
//     if (account) {
//         const updatedAccount = updateAccount(id, req.body)
//         res.status(200).json(updatedAccount)
//     } else {
//         res.status(404).json()
//     }
// })


app.listen (port, () => {
    console.log(`Server is now up at ${port}`);
})