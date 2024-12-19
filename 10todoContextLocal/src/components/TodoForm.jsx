import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [txt, setTxt] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!txt) return

        addTodo({id: Date.now(), txt: txt, completed: false})
        setTxt("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
