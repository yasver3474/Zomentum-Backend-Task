const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require('mongodb');

// Connecting to the MongoDB Databse
mongoose.connect('mongodb://127.0.0.1:27017/ticket-mangaer-api',{
    useNewUrlParser:true,
    useCreateIndex:true
});

// Creating the User Model
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true

    },
    number:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(value.length!=10){
                throw new Error('Incorrect Number')
            }
        }
    }

});
// const me = new User({name:'Yash',number:'99999'});
        
// me.save().then(()=>{
//         console.log(me);
// }).catch((error)=>{
//         console.log(error);
// });
        


// The Ticket Model
const Ticket = mongoose.model('Ticket',{
    user_id:{
        type:ObjectId,
        required:true

    },
    timing:{
        type:Date,
        required:true,
    
    },
    expired:{
        type:Boolean
    }
});
 
