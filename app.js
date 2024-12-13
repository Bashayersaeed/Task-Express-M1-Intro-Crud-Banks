const express = require("express");
const app = express();
const port = "8000"

const accounts = require("./accounts")

app.use(express.json())



const createNewAccount = (newAccountData) => {
    console.log("Creating new accounts", newAccountData)
    const newId = accounts.length + 1
    const newAccount = Object.assign({ id: newId }, newAccountData)
    console.log("My new account is:", newAccount)
    return newAccount
}

const updateAccount = (currentAccount, newData) => {
    const myUpdatedAccount = Object.assign(currentAccount, newData)
    return myUpdateAccount
 }

 const deleteAccount = (accountIdToBeDeleted) => {
    const newAccounts = accounts.filter({account} => account.id != accountIdToBeDeleted)
    console.log("My new accounts are", newAccounts)
 }

app.get('/accounts', (req, res) => {
    res.json(accounts);
});

app.get('/accounts/:accountId', (req,res) => {
        const { accountId } = req.params
        const account = accounts.find((account) => account.id == accountId);
        if (account) {
            res.status(200).json(account)
        } else {
            res.status(404).json()
        }
    })
    
app.put('/accounts/:accountId', (req,res) => {
        const { accountId } = req.params
        const account =accounts.find((account) => account.id == accountId);
        if (account) {
               const updatedAccount = updateAccount(account, req.body)
                res.status(200).json(updatedAccount)
            } else {
                res.status(404).json()
            }
        })
app.delete('/accounts/:accountId', (req, res) => {
    const { accoubtId } = req.params
    const account = accounts.find((account) => account.id == accountId);
    if (account) {
        deleteAccount(accountId)
        res.status(204).end()
    } else {
        res.status(404).json()
    }
})

app.post('/books', (req, res) => {
    const newAccount = createNewAccount(req.body);
    res.status(201).json(newAccount)
})
// app.post('/accounts', (req, res) => {
//     const id = accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1 ;
//     const newAccount = {
//         id,
//         ...req.body,
//         funds: 0,
//     };

//     accounts.push(newAccount);

//     res.status(201).json(newAccount);
// });

// app.delete('/accounts/:accountId', (req ,res) => {
//     const accountId = parseInt(req.params.accountId, 10);

//     const accountIndex = accounts.findIndex(account => account.id === accountId);

//     if (accountIndex === -1) {
//         return res.status(404).json ({ message: "Account not found"});
//     }
//     accounts.splice(accountIndex, 1);
//     res.status(204).send();
// });

// app.put('/accounts/:accountId', (req, res) => {
//     const accountId = parseInt(req.params.accountId, 10);

//     const account = accounts.find(account => account.id === accountId);
//     if (!account) {
//         return res.status(404).json({ message: "Account not found"});
//     }
//     Object.assign(account, req.body);
//     res.status(200).json(account);
// });



app.listen (port, () => {
    console.log(`Server is now up at ${port}`);
})