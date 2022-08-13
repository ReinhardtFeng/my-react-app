import { useState } from "react";
import Header from "./components/header";
function App() {
  const [state, setState] = useState({
    todos: [
      { id: 1, name: "写代码", done: false },
      { id: 2, name: "读书", done: false },
      { id: 3, name: "吃饭", done: false },
      { id: 4, name: "睡觉", done: false },
    ],
  });
  //添加一个todo
  function addTodo(data) {}
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center p-8 mt-8 border w-1/3">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
