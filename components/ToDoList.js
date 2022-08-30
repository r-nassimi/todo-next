const ToDoList = (props) => (
  <div className="TodoList-container">
    <ul className="TodoList">{props.children}</ul>
  </div>
);

export default ToDoList;
