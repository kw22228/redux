import { TodoList, TodoInsert } from '../components/todos';
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
    const dispatch = useDispatch();
    return (
        <>
            <h1>Todo List</h1>
            <TodoInsert />
            <hr />
            <TodoList />
        </>
    );
};

export default Todos;
