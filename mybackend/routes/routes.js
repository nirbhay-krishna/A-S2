const express = require('express');
const router = express.Router();
const contactSchemaCopy = require('../models/contactModels');

router.post('/contact', (request, response) =>{
    const contactfilled = new contactSchemaCopy({
        name:request.body.name,
        email:request.body.email,
        phone:request.body.phone,
        desc:request.body.desc
    })    
    contactfilled.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

// router.get('/signin')
module.exports = router;