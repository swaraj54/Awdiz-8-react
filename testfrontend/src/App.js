import logo from "./logo.svg";
import "./App.css";
import CreateTodo from "./Components/CreateTodo";
import ViewTodos from "./Components/ViewTodos";

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <ViewTodos />
    </div>
  );
}

export default App;
