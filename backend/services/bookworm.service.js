// Access our newly created Mongoose Model
var BookWorm = require('../models/bookworm.models.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the Tic Tac Toe
exports.getBookworms = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

//Let's create a Try and Catch function 
//that way we have some error handling set. 
//Waiting for the promise
    
try {
    var bookworms = await BookWorm.paginate(query, options)
    
//Once the Mongoose promise is returned 
//we're going to go ahead and return 
//the To Do List it has produced 

    return bookworms;

} catch (e) {

//If the try didn't work we're going to 
//go ahead and let the users know what kind of 
//Error we have

    throw Error('Oh No! We got an error while Paginating our To-Do Tasks, so sorry!' )
}
}

exports.createBookworm = async function(bookworm){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newBookworm = new BookWorm({
            title: bookworm.title,
            author: bookworm.author,
            date: new Date(),
            status: bookworm.status
        })
    
        try{
    
            // Let's go ahead and save the todo 
    
            var savedBookworm = await newBookworm.save()
    
            return savedBookworm;
        }catch(e){
          
            //if we can't create a Bookworm we want to throw an error 
    
            throw Error("Error while Creating todo")
        }
    }
    exports.updateBookworm = async function(bookworm){
        var id = bookworm.id
    
        try{
            //Find the old todo Object by the Id
        
            var oldBookworm = await BookWorm.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Todo")
        }
    
        // If no old Todo Object exists return false
    
        if(!oldBookworm){
            return false;
        }
    
        console.log(oldBookworm)
    
        //Edit the Todo Object
    
        oldBookworm.title = bookworm.title
        oldBookworm.author = bookworm.author
        oldBookworm.status = bookworm.status
    
    
        console.log(oldBookworm)
    
        try{
            var savedBookworm = await oldBookworm.save()
            return savedBookworm;
        }catch(e){
            throw Error("And Error occured while updating the Todo");
        }
    }

    exports.deleteBookworm = async function(id){
    
        // Delete the Bookworm
    
        try{
            var deleted = await BookWorm.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Todo Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Todo")
        }
    }