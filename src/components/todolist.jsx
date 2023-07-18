import { useEffect, useState } from "react";
import Todos from "./todo";

export default function TodoList() {

    const [itemId, setItemId] = useState(0);

    const handleDelete = (id) => {
        let index = Todos.map(t => t.id).indexOf(id);
        Todos.splice(index, 1);
        setItemId(index);
    };

    return (
        <div className="mt-5">
            <table className="w-7/12 h-auto border mx-auto">
                <thead className="bg-emerald-200 text-2xl">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Todos.map(t => {
                        return (
                            <tr key={t.id} className="text-center bg-neutral-300 h-12">
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td><button onClick={() => handleDelete(t.id)} className="px-8 py-1 bg-red-400 rounded-md">Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}