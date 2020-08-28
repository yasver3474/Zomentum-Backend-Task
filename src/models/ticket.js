const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require('mongodb');
// The Ticket Model
const Ticket = mongoose.model('Ticket',{
    user:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,

        validate(value){
            if(value.length!=10){
                throw new Error('Invalid Number');
            }
        }
    },
    movieTime:{
        type:Date,
        required:true,
        
    },
    expire:{
        type:Boolean
    }

});


module.exports = Ticket;