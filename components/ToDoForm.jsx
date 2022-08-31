const ToDoForm = (props) => {
  const { onSubmit, onClick, value, onChange, isEditing } = props;
  return (
    <div className="TodoForm-container">
      <form className="TodoForm" onSubmit={onSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Add new task"
          value={value}
          onChange={onChange}
          maxLength={50}
          required
        />

        <div className="btn-container">
          <button className="form-btn" type="submit">
            {!isEditing ? 'Add task' : 'Edit task'}
          </button>

          <button className="form-btn" type="button" onFocus={onClick}>
            {!props.isEditing ? 'Clear tasks' : 'Cancel'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
