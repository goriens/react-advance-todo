export const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div className="todo-list" key={todo.id}>
      <div className="todo-list-item">
        <img
          className="check"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrlHxJ0CGn3j0l69lybCmNVQMyRZC_qQUfw&usqp=CAU"
        />
        {todo.name}
      </div>
      <div>
        <button className="toggle" onClick={() => handleDelete(todo.id)}>
          ⭐
        </button>
      </div>
    </div>
  );
};
