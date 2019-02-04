var BookwormService = require('../services/bookworm.service.js');

exports.getBookworms = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
        
            var bookworms = await BookwormService.getBookworms({}, page, limit)
            
    // Return the todos list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: bookworms, message: "Succesfully Todos Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
    }
}

exports.createBookworm = async function(req, res, next){

    // Note: Req.Body contains the form submit values.

    var bookworm = {
        title: req.body.title,
        author: req.body.author,
        status: req.body.status
    }

    try{
        
        // Calling the Service function 
        //with the new object from the Request Body
    
        var createdBookworm = await BookwormService.createBookworm(bookworm)
        return res.status(201).json({status: 201, data: createdBookworm, message: "Succesfully Created Todo"})
    }catch(e){
        
        //Return an Error Response Message 
        //with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Todo Creation was Unsuccesfull, I am sorry :( "})
    }
}

exports.updateBookworm = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var bookworm = {
        id,
        title: req.body.title ? req.body.title : null,
        author: req.body.author ? req.body.author : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedBookworm = await BookwormService.updateBookworm(bookworm)
        return res.status(200).json({status: 200, data: updatedBookworm, message: "Succesfully Updated Todo"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.removeBookworm = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await BookwormService.deleteBookworm(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}