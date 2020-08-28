const express = require('express');
require('./db/mongoose');
const Ticket = require('./models/ticket');
const app = express();
const port = process.env.PORT || 3000;

// To convert the incoming request body to a JS object from JSON
app.use(express.json());

//Rescource endpoint for Creating A Ticket
app.post('/tickets',(req,res)=>{
    // console.log(req.body);
    const ticket = new Ticket(req.body)
    ticket.save().then(()=>{
        
        res.send(ticket);
        res.send('Created');

    }).catch((error)=>{
        res.status(400);
        res.send(error);
    })
})

// Resource Enpoint for Viewing all the tickets for a particular time
app.get('/tickets/:time',(req,res)=>{

    const time = req.params.time;
    Ticket.find({movieTime: new Date(time)}).then((tickets)=>{
        return res.send(tickets);
    }).catch((error)=>{
        return res.send(error);
    })

});

// Resource Endpoint for a viewing user details linked with a ticket id
app.get('/user/:id',(req,res)=>{
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
app.patch('/tickets/:id',(req,res)=>{

})
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})
