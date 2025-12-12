import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, text: editText }));
        
        setEditId(null);
        setEditText("");
    };

  return (
    <div className="w-full max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Todos</h2>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-50 p-2 rounded"
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border px-2 py-1 rounded w-full mr-2"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
