import * as dotenv from "dotenv";
dotenv.config();
import express, {json} from "express";
import cors from "cors";
import mongoose from "mongoose";
import Todo from "./model/todo.js";

import todosRoutes from "./routes/todos.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/todos", todosRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("database connected"))
.catch((err)=> console.log(err));

//////////////////
const todo1= new Todo({
    text: "get todos api",
    description: "create get all todos api",
    category: "My day",
    important: true
});

// todo1.save((err)=> {
//     if(!err){
//         console.log("document saved");
//     }else{
//         console.log(err);
//     }
// });
 
app.listen(process.env.PORT, ()=>{
    console.log(`server is listening at port ${process.env.PORT}`);
});