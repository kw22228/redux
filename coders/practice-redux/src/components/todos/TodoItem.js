import { useDispatch } from 'react-redux';
import { remove } from '../../store/reducers';

const TodoItem = ({ text, id }) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(remove({ id }));
    };

    return (
        <li>
            {text}
            <button onClick={onClickHandler}>Delete</button>
        </li>
    );
};

export default TodoItem;
