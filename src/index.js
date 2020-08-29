const express = require('express');
require('./db/mongoose');
const Ticket = require('./models/ticket');
const app = express();
const port = process.env.PORT || 3000;
const ticketRouter = require('./routers/ticket');

// To convert the incoming request body to a JS object from JSON
app.use(express.json());
// Calling the ticket router
app.use(ticketRouter);
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
