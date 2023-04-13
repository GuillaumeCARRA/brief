// npm import
import express from "express"; 

// import .env
import {} from 'dotenv/config';

//import routes
import router from './app/router'; 

// create express server 
const app = express(); 

/** réglages du moteur de vues */
app.set('view engine', 'ejs');
app.set('views', './app/views');

// add route
// app.get('/', (request, response) => {
//     response.send('Hello World');
//   });

app.use(router);


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});