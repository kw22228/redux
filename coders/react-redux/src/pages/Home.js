import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreateors } from '../store';
import Todo from '../components/Todo';

const Home = ({ todos, addTodo, deleteTodo }) => {
    const [text, setText] = useState('');
    const onChangeHandler = e => {
        setText(e.target.value);
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    const onClickDelete = e => {
        const id = parseInt(e.target.parentNode.id);
        deleteTodo(id);
    };
    return (
        <>
            <div>
                <h1>To do List</h1>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" value={text} onChange={onChangeHandler} />
                    <button>Add</button>
                </form>
            </div>
            <hr />
            <div>
                <ul>
                    {todos.map(todo => (
                        <Todo {...todo} key={todo.id} />
                    ))}
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = (state, props) => {
    return { todos: state };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodo: text => dispatch(actionCreateors.addTodo(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
