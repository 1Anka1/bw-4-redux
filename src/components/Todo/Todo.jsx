import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'redux/todo-slice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    const removeAction = removeTodo(id);
    console.log('removeAction', removeAction);
    dispatch(removeAction);
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={deleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
