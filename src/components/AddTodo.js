import { Button, FormControl, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {nanoid} from 'nanoid'

const AddTodo = ({ addTodo }) => {
    const toast= useToast();
  const [content, setContent] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    if(!content)
    { 
        toast({
            title:'No content',
            status:'error',
            duration:2000,
            isClosable:true 
        })
        return
    }
  
    const todo = {
        id:nanoid(),
        body:content,
    }
    // console.log(todo);
    addTodo(todo)
    setContent('');
  };



  return (
    <form onSubmit={handleSubmit}> 
      <HStack mt={8}>
        <Input variant={"filled"} placeholder="Enter Your Task " value={content} onChange={(e)=>setContent(e.target.value)}></Input>
        <Button colorScheme="pink" px={6} py={4} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
