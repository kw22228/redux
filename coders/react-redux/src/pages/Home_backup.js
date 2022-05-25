import { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import Todo from '../components/Todo';

const Home = ({ todos, addTodo }) => {
    const [text, setText] = useState('');
    const onChangeHandler = e => {
        setText(e.target.value);
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        if (!text) {
            return;
        }

        const id = Date.now();
        addTodo(text, id);
        setText('');
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

const mapStateToProps = state => {
    return { todos: state };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text, id) => dispatch(add({ text, id })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
