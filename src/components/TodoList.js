import {
    Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

const TodoList = ({todos, deleteTodo}) => {

    if(!todos.length)
    {
       return(
        <Badge colorScheme="green" p={5} m={4} borderRadius={'lg'}>
        No Todos yah!!
    </Badge>
       )
    }
 
  return (

  
    <VStack
      divider={<StackDivider />}
      borderColor={"gray.300"}
      borderWidth={1}
      p={4}
    
      borderRadius={"lg"}
      w='100%'
      maxW={{base:'90vw', sm:'80vw',lg:'50vw', xl:'40vw'}}
     
    
    >
      {todos.map((todo) => (
        <HStack key={todo.id}  justifyContent={'space-between'} width='100%' >
          <Text>{todo.body}</Text>
         
          <IconButton icon={<FaTrash />} isRound="true" onClick={()=>deleteTodo(todo.id)}/>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
