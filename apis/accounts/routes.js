const express = require("express")
const router = express.Router()
const accounts = require("../../accounts")

const {listAccounts, accountDetail, creatAccount, updateAccount, deleteAccount} = require("./controllers")

router.get('/', listAccounts)
router.post('/', creatAccount)
router.get('/:accountId', accountDetail) 
router.put('/:accountId', updateAccount)
router.delete('/:accountId', deleteAccount)

module.exports = router