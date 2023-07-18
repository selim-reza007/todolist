import { useState } from "react";
import TodoList from "./todolist";
import Todos from "./todo";

export default function Index() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        let idLen = Todos.length+1;
        let id = 'id'+idLen;
        const newTodo = { id: id,title: title, description: description };
        Todos.push(newTodo);
        
        setDescription("");
        setTitle("");
    }

    return (
        <div className="bg-gray-500 w-screen min-h-screen">
            <p className="text-2xl font-bold text-white text-center py-5">To do list</p>
            <div className="w-3/4 h-14 mx-auto">

                <input type="text" className="w-3/12 h-14 pl-2 placeholder:pl-[15px] rounded-md" onChange={e => setTitle(e.target.value)} value={title} placeholder="to do title" /> &nbsp;
                <input type="text" className="w-6/12 h-14 pl-2 placeholder:pl-[15px] rounded-md" onChange={e => setDescription(e.target.value)} value={description} placeholder="to do shors description" />&nbsp;
                <button onClick={handleSubmit} className="px-16 h-14 bg-blue-400 rounded-md">Create to do</button>

            </div>

            <TodoList />
        </div>
    );
}