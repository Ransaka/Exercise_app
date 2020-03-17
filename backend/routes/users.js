const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find().then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error'+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    console.log(username)
    const NewUser = new User({username});
    console.log(NewUser)

    NewUser.save().then(()=>{
        res.send('User added!');
    }).catch(err=> res.status(400).json('Error' + err));

});

module.exports = router;
