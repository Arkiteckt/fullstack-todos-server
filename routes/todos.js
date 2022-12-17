var express = require('express');
const { db } = require('../mongo');
var router = express.Router();


const mockTodos = [{
	id: "4387f4d8-aeac-4559-9f1b-3c5d537c955c",
	title: "Implement Fullstack ToDo List",
	description: "Implement the fullstack todo list application.",
	isComplete: false,
	priority: "High",
	creationDate: new Date(),
	lastModified: new Date(),
	completedDate: null
}, {
	id: "e365f13c-4c1d-4ee1-8a66-3dbbbab71f0d",
	title: "Create /all route for mock data",
	description: "Create an express route that will respond with the mock todo list.",
	isComplete: false,
	priority: "High",
	creationDate: new Date(),
	lastModified: new Date(),
	completedDate: null
}, {
	id: "08dd1f20-7d31-4120-89ed-343d4006a7cb",
	title: "Create a home page in the client",
	description: "Create a Home Page in React that will display all the todos.",
	isComplete: false,
	priority: "High",
	creationDate: new Date(),
	lastModified: new Date(),
	completedDate: null
}, {
	id: "98a06f8f-50c9-4832-9d2d-daa45543db00",
	title: "Create the todo card component",
	description: "Create a react ToDoCard component that will be rendered for each todo on the home page.",
	isComplete: false,
	priority: "Medium",
	creationDate: new Date(),
	lastModified: new Date(),
	completedDate: null
}, {
	id: "7c5d70bb-2a00-4009-9bb8-1bb163fb501f",
	title: "Test basic application with mock data",
	description: "Visit the client Home Page to see the todo's displayed as a list.",
	isComplete: false,
	priority: "Medium",
	creationDate: new Date(),
	lastModified: new Date(),
	completedDate: null
}]

/*GET todos listing. */
router.get('/all', function(req, res, next) {
    res.json({
        success: true,
    	list: mockTodos //Switch the /todos/all route to find all toDo's in the mongo database and send those in the response instead of mocktodos.
    });
});

router.post("/create-one", async (req, res) =>{
	try{ const requestBody = req.body
		const todos = await db().collection("todos");
		// db().collection('todos')
		// create a document to insert
		requestBody.isComplete = false;
		requestBody.creationDate = new Date();

  	 	await todos.insertOne(requestBody);
		res.json({
			success: true,
		})
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            error: error.toString(),
        });
    }
})

router.delete('/delete-one/:id', function(req, res, next) {
    res.json({
        success: true,
    delete: toDos  
    });
});
module.exports = router;


// router.post("/todos/create-one", async (req, res) => {
// 	const id = req.params.id;
// 	const title = req.body.title;
// 	const description = req.body.description;
//  	const isComplete = req.body.isComplete;
// 	const priority = req.body.priority;
//  	const creationDate = new Date();
//  	const lastModified = new Date();
//  	const completedDate = new Date();
// 	});
 //doublecheck this

// 	const user = await db().collection("todos").findOne({
// 		email,


// router.post("/create-one", async (req, res) =>{
//     try{

//     } catch (error) {
//         console.error(err);
//         res.json({
//             success: false,
//             error: err.toString(),
//         });
//     }
// })