import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoItem } from "../components/TodoItem";
import { Completed } from "./Completed";

function Todo() {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [show, setShow] = useState(true);

  const addItem = (todo) => {
    if (!todo) {
      alert("Please write something");
    } else {
      const payload = {
        name: todo,
        id: nanoid(8),
      };
      setItems([...items, payload]);
    }
    //const payload = {
    //  status: false,
    //  title: todo,
    //  id: nanoid(5),
    //};
    //setTodoList([...TodoList, payload]);
  };
  const handleDelete = (id) => {
    const updateItems = items.filter((e) => {
      return id !== e.id;
    });
    setItems(updateItems);
    setCompleted(updateItems);
  };

  return (
    <div className="container">
      <div>
        <div>
          <TodoInput addItem={addItem} />
        </div>
        {items.map((e) => (
          <TodoItem handleDelete={handleDelete} todo={e} />
        ))}
      </div>

      <button
        className="show-btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show completed todos
      </button>
      {!show ? (
        <div>
          {completed.map((e) => (
            <Completed todo={e} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export { Todo };
