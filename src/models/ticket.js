const mongoose = require('mongoose');
const { ObjectID, ObjectId } = require('mongodb');
// The Ticket Schema
const ticketSchema = mongoose.Schema({
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

});
// This index will expire the ticket document after 8 hours of the given movie time
// The delete routine that runs after every 60s will delete the expired documents
ticketSchema.index({movieTime:1},{expireAfterSeconds:50});
const Ticket = mongoose.model('Ticket',ticketSchema);
module.exports = Ticket;