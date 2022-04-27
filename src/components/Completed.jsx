export const Completed = ({ todo }) => {
  return (
    <div className="todo-list" key={todo.id}>
      <div className="todo-list-item">
        <img
          className="check"
          src="https://www.pngall.com/wp-content/uploads/8/Check-Mark-PNG.png"
        />
        <div className="complete">{todo.name}</div>
      </div>
      <div>
        <button className="toggle">⭐</button>
      </div>
    </div>
  );
};
