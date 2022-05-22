import { connect } from 'react-redux';
import { actionCreateors } from '../store';

const Todo = ({ text, id }) => {
    return (
        <li id={id}>
            {text}
            <button>Delete</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteTodo: id => dispatch(actionCreateors.deleteTodo(id)),
    };
};
export default connect(mapDispatchToProps)(Todo);
