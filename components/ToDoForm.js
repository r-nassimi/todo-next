const ToDoForm = (props) => (
  <div className="TodoForm-container">
    <form className="TodoForm" onSubmit={props.onSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Add new task"
        value={props.value}
        onChange={props.onChange}
        maxLength={50}
        required
      />

      <div className="btn-container">
        <button className="form-btn" type="submit">
          {!props.editing ? "Add task" : "Edit task"}
        </button>
        
        <button className="form-btn" type="button" onFocus={props.onClick}>
          {!props.editing ? "Clear tasks" : "Cancel"}
        </button>
      </div>
    </form>
  </div>
);

export default ToDoForm;
