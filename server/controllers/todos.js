import Todo from "../model/todo.js";

export const getTodos = async (req, res)=>{
    const todos = await Todo.find({});
    res.json(todos);
};

export const postTodo = async (req, res)=>{
    console.log(req.body);

    const newTodo = new Todo({
        text: req.body.text,
        category: req.body.category,
        completed: req.body.completed,
        dueDate: req.body.dueDate,
        important: req.body.important,
        description: req.body.description
    });

    const response = await newTodo.save();
    res.json(response);

};

export const editTodo = (req, res)=>{
    const id = req.params.id;

    Todo.findOneAndUpdate({_id: id},
        {$set: {
        text: req.body.text, 
        category: req.body.category, 
        dueDate: req.body.dueDate, 
        completed: req.body.completed,
        important: req.body.important,
        description: req.body.description
    }}, {returnDocument: "after"}, (err, updatedDocument)=>{
        if(!err){
            res.json(updatedDocument);
        }else{
            res.json(err);
        }
    })
};

export const deleteTodo = async (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const response = await Todo.findByIdAndDelete(id);
    res.json(response);
};

