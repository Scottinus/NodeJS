const express = require('express')
const bodyParser = require('body-parser')


const projectRoutes = require("./");

const server = express()

server.use(bodyParser.json())

 server.use("/projects", projectRoutes); 


server.listen(3000, () => {
    console.log('Server running on port 3000')

})