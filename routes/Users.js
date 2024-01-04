const express = require('express');
const router = express.Router();
const Users = require('../database/Users')

router.get('/', (req, res) => {
    res.json(Users);
})

router.get('user/:id/:token', (req, res) => {
    Users.filter((user) => {
        let found = Users.some((user) => user.id === req.params.id)

        if (found) {
            if (user.id === req.params.id) {
                res.json(user)
            }
        }
        else { res.json({ status: 400, msg: 'User not found' }) }
    })
})

router.post('/', (req, res)=>{

})

module.exports = router;