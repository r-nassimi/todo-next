const ToDoList = (props) => (
  <div className="Todo-List">
    <ul className="ToDo-List">{props.children}</ul>
  </div>
);

export default ToDoList;
