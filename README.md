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
The follwing POSTMAN screenshot shows the sucessful ticket creation as well as the invalid ticket creation

#### Successful Ticket Creation 
![Successful Ticket Creation](/images/vaildTicket.png)


#### Unsuccessful Ticket Creation 
![Unsuccessful Ticket Creation](/images/invaildTicket.png)
