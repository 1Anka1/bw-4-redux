import { useSelector } from "react-redux";
import { Grid, GridItem, Todo } from "components";

export const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
    <Grid>
              {todos.length > 0 &&
                todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                      // onClick={deleteTodo}
                    />
                  </GridItem>
                ))}
            </Grid> 
    )
}

