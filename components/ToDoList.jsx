const ToDoList = (props) => {
  const { children } = props;
  return (
    <div className="ToDo-List">
      <ul>{children}</ul>
    </div>
  );
};

export default ToDoList;
