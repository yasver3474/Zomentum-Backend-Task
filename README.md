# Zomentum-Backend-Task
The following repository contains the movie theathre API. 

## Folder Strcuture
The repo contains a src folder which contains all the source code for the API
  ### SRC Folder
  
  The SRC folder has the follwing bifercation 
  * src
    * db
      * mongoose.js
    * models
      * ticket.js
    * routers
      * ticket.js
    * index.js
    * .gitignore
    
   
## Database and Connectivity

The database is a No SQL database created using mongo DB. 
Below is a snippet of the database. 
![Databse Snippet](/images/Database.png)
The database named **Ticket Manager API** has the following fields
* object_ID: Unique ID for every ticket
* user : Name of the user who booked the ticket 
* number: Contact number of the user
* movieTime: Time slot for the movie
All these details have been mentioned in the src/models/ticket.js file with complete detail.

The mongoose.js file in the src/db connects to the database


## Business Cases/ Rest API 

Express has been used to create establish a server and also to handle various client server calls.

### Business Case -1 : Booking a ticket 
The follwing POSTMAN screenshots show the sucessful ticket creation as well as the invalid ticket creation

#### Successful Ticket Creation 
![Successful Ticket Creation](/images/validTicket.png)


#### Unsuccessful Ticket Creation 
![Unsuccessful Ticket Creation](/images/invalidTicket.png)


### Business Case -2 : Update Ticket Time 
The following POSTMAN screenshot shows successful working of this business case
![Successfull Timing Upate](/images/updateTime.png)

### Business Case -3 : View all the tickets for a particular time 
The following POSTMAN screenshot shows the successful working of this business case 
![Tickets by Time](/images/getTicketsByTime.png)


### Business Case -4 : Delete all the tickets 
The following POSTMAN screenshot shows the successful working of this business case 
![Delete Ticket](/images/deleteTicket.png)


### Business Case -5 : View user details associated with a particular ticket id 
The following POSTMAN screenshot shows the successful working of this business case 
![Tickets by Time](/images/userDetail.png)


### Business Case -6 : Expire the ticket after 8 hours of the movieTime 
The following POSTMAN screenshot shows the successful working of this business case 
First Screenshot shows creation of a ticket that had time 8 hours less than the current time
![TimeDelay](/images/deleteTicket.png)
Second Screenshot shows the automatic deletion of the ticket as it was expired now\
![Automatic Delete](/images/AutomaticallyDeleted.png)




