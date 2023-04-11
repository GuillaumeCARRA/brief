// npm import
import express from "express"; 
// import .env
import {} from 'dotenv/config';

// create express server 
const app = express(); 

// add route
app.get('/', (request, response) => {
    response.send('Hello World');
  });

// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});