const express = require("express");
const app = express();
const port = "8000"


const accountRouter = require("./apis/accounts/routes")

app.use(express.json())
app.use('/api/accounts', accountRouter)

app.listen (port, () => {
    console.log(`Server is now up at ${port}`);
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



