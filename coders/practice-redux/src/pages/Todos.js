import { TodoList, TodoInsert } from '../components/todos';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/reducers/';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const addHandler = text => {
        if (!text) {
            return;
        }
        dispatch(add(text));
    };

    return (
        <>
            <h1>Todo List</h1>
            <TodoInsert addHandler={addHandler} />
            <hr />
            <TodoList todos={todos} />
        </>
    );
};

export default Todos;
