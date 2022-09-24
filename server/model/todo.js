import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        default : new Date()
    },
    dueDate: Date,
    completed: {
        type : Boolean,
        default : false
    },
    important: {
        type: Boolean,
        default: false
    },
    description: String
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;