import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove } from '../store';

const Todo = ({ text, id, deleteTodo }) => {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteTodo: () => dispatch(remove(props.id)),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
