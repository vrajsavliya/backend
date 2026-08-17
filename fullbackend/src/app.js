// app.js ka kam hote hai sever ko create karna aur uske routes ko define karna. 
// Ye file server.js ke andar likhi gayi hai.


const express = require('express');
const { dlopen } = require('node:process');
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

// GET endpoint to fetch all notes
app.get('/notes',(req,res)=>{
    // Sends a 200 OK status with the array of notes
    res.status(200).json(
        {
            message : "notes fetched successfully",
            notes : notes
        }
    )
})

// DELETE endpoint to remove a note by its index in the array
app.delete('/notes/:index',(req,res)=>{
    // Extract index from request parameters
    const index = parseInt(req.params.index, 10);
    
    // Delete the note at the given index using splice
    if (index >= 0 && index < notes.length) {
        notes.splice(index, 1);
        res.status(200).json({
            message : "note deleted successfully"
        });
    } else {
        res.status(404).json({
            message : "note not found"
        });
    }
})

// PATCH endpoint to partially update a note's description
app.patch('/notes/:index',(req,res)=>{
    // Extract index from request parameters
    const index = parseInt(req.params.index, 10);
    
    // Extract new description from request body
    const description = req.body.description;
    
    if (index >= 0 && index < notes.length) {
        // Update the note's description if provided
        if (description) {
            notes[index].description = description;
        }
        
        // Send success response
        res.status(200).json({
            message : "note updated successfully",
            note : notes[index]
        });
    } else {
        res.status(404).json({
            message : "note not found"
        });
    }
})


module.exports = app;