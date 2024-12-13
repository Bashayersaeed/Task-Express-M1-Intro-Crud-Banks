
const accounts = require("../../accounts")

exports.listAccounts = (req,res) => {
    const name = req.query.name;
    const fund = req.query.fund;
    console.log("name", name)
    console.log("fund", fund)
    let result = accounts
    if (name) {
        reult = accounts.filter((account) => account.name == name)
       
    } 
    if (fund) {
        result = result.filter((account) => account.fund.includes(fund))
        console.log("Hello! This is my first router endpoint!")
        res.json(result)
    }
}

exports.accountDetail = (req, res) => {
    const { accountId } = req.params
    const account = accounts.find((account) => account.id == accountId);
    if (account) {
        res.status(200).json(account)
    } else {
        res.status(404).json()
    }
}

const createNewAccount = (newAccountData) => {
    console.log("Creating new accounts", newAccountData)
    const newId = accounts.length + 1
    const newAccount = Object.assign({ id: newId }, newAccountData)
    console.log("My new account is:", newAccount)
    return newAccount
}

exports.creatAccount = (req, res) => {
    const newAccount = createNewAccount(req.body);
    res.status(201).json(newAccount)
}

const updateAccount = (currentAccount, newData) => {
    const myUpdatedAccount = Object.assign(currentAccount, newData)
    return myUpdateAccount
 }
 exports.updateAccount = (req,res) => {
    const { accountId } = req.params
    const account =accounts.find((account) => account.id == accountId);
    if (account) {
           const updatedAccount = updateAccount(account, req.body)
            res.status(200).json(updatedAccount)
        } else {
            res.status(404).json()
        }
    }

const deleteAccount = (accountIdToBeDeleted) => {
     const newAccounts = accounts.filter({account} => account.id != accountIdToBeDeleted)
     console.log("My new accounts are", newAccounts)
     }
 exports.deleteAccount = (req, res) => {
        const { accoubtId } = req.params
        const account = accounts.find((account) => account.id == accountId);
        if (account) {
            deleteAccount(accountId)
            res.status(204).end()
        } else {
            res.status(404).json()
        }
    }