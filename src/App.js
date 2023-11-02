import "./App.css"

function App() {
  return (
   <div className="App">
    <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <div>
              <label>Title</label>
              <input type= "text" placeholder="What is the task title?"b/>
            </div>

            <div className="todo-input-item">
              <label>Dexcription</label>
              <input type= "text" placeholder="What is the task descriptipn?"/>
            </div>

            <div className="todo-input-item">
              <button type="button" className="primaryBtn">Add</button>
            </div>
          </div>

          <div className="btn-area">
            <button>Todo</button>
            <button>Completed</button>
          </div>

          <div className="todo-list">

          <div className="todo-list-item">
            <div>
              <h1>Task 1</h1>
              <p>Description</p>
          </div>
        </div>
      </div>

      </div>
    </div>
   </div>
  );
}

export default App;
