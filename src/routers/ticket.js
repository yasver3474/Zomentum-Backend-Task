const express = require('express');
const Ticket = require('../models/ticket');
const router = new express.Router();


//Rescource endpoint for Creating A Ticket + Checking if number of tickets less than 20 or not.
router.post('/tickets', (req,res)=>{
    // console.log(req.body);
    const ticket = new Ticket(req.body)
    // Counting the documents that have the movieTime as the req.body user time
    Ticket.countDocuments({movieTime:ticket.movieTime},(error,count)=>{
        if(error){
            return res.status(500).send();
        }
        else{
            if(count>=20){
                // If count is greater than 20 then not adding the document to the database
                return res.status(503).send('HouseFull');
            }else{
                // else adding the document to the databse
                ticket.save().then(()=>{
                
                    res.send(ticket);
                    // res.send('Created');
            
                }).catch((error)=>{
                    res.status(400);
                    res.send(error);
                })
        
            }
        }
    });

    
});

// Resource Enpoint for Viewing all the tickets for a particular time
router.get('/tickets/:time',(req,res)=>{

    // Getting the time for the query from the req parameters
    const time = req.params.time;
    // Finding the documents with 
    Ticket.find({movieTime: new Date(time)}).then((tickets)=>{

        if(!tickets){
            return res.status(404).send();
        }else{
            return res.status(200).send(tickets);
        }
    }).catch((error)=>{
        return res.status(500).send(error);
    })

});

// Resource Endpoint for a viewing user details linked with a ticket id
router.get('/user/:id',(req,res)=>{
    const _id = req.params.id;
    Ticket.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }else{
            const userDetails = {
                name:user.user,
                number:user.number
            }
            return res.status(200).send(userDetails);
        }
    }).catch((error)=>{
        return res.send(500).send();
    })
})
// Resource Endpoint for Updating a Ticket Time 
router.patch('/tickets/:id',async (req,res)=>{

    //The request body will have the new Ticket Time.
    try{

        const ticket = await Ticket.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!ticket){
            return res.status(404).send();
        }
        res.send(ticket);
    } catch(error){
        console.log(error);
        res.status(400).send(error);

    }


});

// Resource Endpoint for Deleting a particular a ticket
router.delete('/tickets/:id',async (req,res)=>{

    try{
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if(!ticket){
            return res.status(404).send();
        }
        return res.send(ticket);
        
    } catch(error){
        res.status(500).send();
    }

})


module.exports = router;
