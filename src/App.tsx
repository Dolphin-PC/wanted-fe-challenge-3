import Input from "./components/Input";
import AddButton from "./components/AddButton";
import TodoList from "./components/List/TodoList";

function App() {
  return (
    <div className="App container mx-auto px-4">
      <header className="flex items-center justify-between p-4">
        <div className="w-8/12">
          <Input />
        </div>
        <div className="w-3/12">
          <AddButton />
        </div>
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
