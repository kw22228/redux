import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { remove } from '../store';

const Detail = ({ todos, deleteTodo }) => {
    const params = useParams();
    const todo = todos.find(({ id }) => id === parseInt(params.id));
    const nav = useNavigate();

    const onClickHandler = () => {
        deleteTodo(todo.id);
        nav('/');
    };

    return (
        <>
            <h1>Detail</h1>
            {todo && <h3>ID :{todo.id}</h3>}
            {todo && <h2>TEXT :{todo.text}</h2>}
            {todo && <button onClick={onClickHandler}>Delete</button>}
        </>
    );
};

const mapStateToProps = state => {
    return { todos: state };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(remove(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
