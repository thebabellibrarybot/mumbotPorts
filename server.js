
const express = require('express');
const cors = require('cors')
const { ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const corsOptions = require('./backend/config/corsOptions');
const credentials = require('./backend/middleware/credentials');
 
const getHomeBaseRoutes = require('./backend/routes/homebaseRoute');


const mongoose = require('mongoose');
const app = express();
const Port = process.env.PORT || 4000
console.log(Port, 'port')


// fetch cookies credentials requirement
app.use(credentials);
// cross origin resource sharing
app.use(cors(corsOptions));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// expres w/o custom hook
app.use(express.json());
// logger
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, 'server msg from port')
    next()
});



// midleware for cookies
app.use(cookieParser());
// mongoDB conn
const uri = process.env.MONGODB_URI
//const uri = "mongodb+srv://babeluser:babelpassword@babelcluster.fogf4.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('md conn')
})

// routes

// get home info
app.use('/home', getHomeBaseRoutes);





// serve static assests if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clinet', 'build', 'index.html'));
    });
}
// port and clear run statements;
app.listen(Port, () => {
    console.log(`listening on 4000`)
});