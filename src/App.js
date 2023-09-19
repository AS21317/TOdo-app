import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";

function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get tea",
    },
    {
      id: 3,
      body: "get three",
    },
    {
      id: 4,
      body: "get four",
    },
  ];

  function deleteTodo(id) {
    const newTOdos = todos.filter((todo) => todo.id !== id);
    setTodos(newTOdos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos ")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // To apply color mode first import colorModesript in index.js and pass their initial color
  // then in app.js use usecolormode to do that 

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <div className="App">
      <VStack p={4}>
        <IconButton
          icon={colorMode ==='light' ?<FaSun />:<FaMoon/>}
          isRound="true"
          size={"lg"}
          alignSelf={"flex-end"}
          onClick={toggleColorMode}
        />
        <Heading
          mb={8}
          fontWeight={"extrabold"}
          size={"2xl"}
          bgGradient="linear(to-r,pink.500,pink.300,blue.500) "
          bgClip={"text"}
        >
          TODO Applocation
        </Heading>

        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </div>
  );
}

export default App;
