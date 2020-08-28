const express = require('express');
require('./db/mongoose');
const Ticket = require('./models/ticket');
const app = express();
const port = process.env.PORT || 3000;

// To convert the incoming request body to a JS object from JSON
app.use(express.json());

//Rescource endpoint for Creating A Ticket + Checking if number of tickets less than 20 or not.
app.post('/tickets',async (req,res)=>{
    // console.log(req.body);
    const ticket = new Ticket(req.body)
    Ticket.countDocuments({movieTime:ticket.movieTime},(error,count)=>{
        if(error){
            return res.status(500).send();
        }
        else{
            if(count>=20){
                return res.status(503).send('HouseFull');
            }else{
                ticket.save().then(()=>{
                
                    res.send(ticket);
                    res.send('Created');
            
                }).catch((error)=>{
                    res.status(400);
                    res.send(error);
                })
        
            }
        }
    });

    
});

// Resource Enpoint for Viewing all the tickets for a particular time
app.get('/tickets/:time',(req,res)=>{

    const time = req.params.time;
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
app.patch('/tickets/:id',async (req,res)=>{

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
app.delete('/tickets/:id',async (req,res)=>{

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
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
