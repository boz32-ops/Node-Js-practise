
const http = require('http');
const express=require('express');

const app=express();
app.use((req,res,next)=>{

console.log("in the middleware");
res.send('<h1>Hello from Express</>');
next();
})


app.use((req,res,next)=>{


console.log("in the next middleware");
res.send('<h1>Hello from Express</>');
})

// Create server
const server = http.createServer(app);

// Start server
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
