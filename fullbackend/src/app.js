// app.js ka kam hote hai sever ko create karna aur uske routes ko define karna. 
// Ye file server.js ke andar likhi gayi hai.


const express = require('express');
const app = express();

app.use(express.json()); // ye middleware hote hai jo ki request body ko json format me convert kar deta hai.
// ye postman se data send kiya hai vo body me aa jata hai aur hum usko access kar sakte hai req.body ke through.



// 1.TASK :- create the node server using express framework.
// and use the http methods to create the node

/*note = {
    title : "Node server using express framework",
    description : "This is a simple node server created using express framework. It has some routes defined for different http methods like GET, POST, PUT, DELETE etc.",
    author : "Your Name",
    date : "2023-06-01"
}*/

//we will create the array to store the multiple nodes 

//note = [ {}, {}, {}]

const notes = []

//to create the API so the user can create the note so the user will give the title and the desr 
// form the frontend and we will store it in the array and return the note to the user.

//we will use the post method 

app.post('/notes',(req,res)=>{
    //we will get the title and the description from the request body
    //console.log(req.body)

    notes.push(req.body) // we will push the note to the array
    res.status(201).json(
        
        {message : "Note created successfully"}
    ) // we will send the note back to the user with the status code 201
    
})// we created the API named /notes and rhe method used int he POST method

app.get('/notes',(req,res)=>{
    res.status(200).json(
        {
            message : "notes fetshed successfully",
            notes : notes
        }
    )
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index]
    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    // Add logic to update the note at the specified index
    const description = req.body.description;
    if (description) {
        notes[index].description = description;
    }
    res.status(200).json({
        message : "note updated successfully"
    })
})


module.exports = app;