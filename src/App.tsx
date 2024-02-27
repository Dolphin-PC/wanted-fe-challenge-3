import TodoList from "./components/List/TodoList";
import AddTodoContainer from "./components/AddTodoContainer";

function App() {
  return (
    <div className="App container mx-auto px-4">
      <header>
        <AddTodoContainer />
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
