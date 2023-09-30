import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="container">
      <AddTodo />
      <Todos />
    </div> 
  )
}
