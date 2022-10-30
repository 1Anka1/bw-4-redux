import { useSelector } from 'react-redux';
import { Grid, GridItem, Todo, Text } from 'components';

export const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
    </>
  );
};
