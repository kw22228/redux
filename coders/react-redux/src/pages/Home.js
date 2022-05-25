import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store';
import Todo from '../components/Todo';

const Home = () => {
    const [text, setText] = useState('');

    const todos = useSelector(state => state);
    console.log(todos);
    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setText(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if (!text) {
            return;
        }

        const id = Date.now();
        dispatch(add({ text, id }));
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

export default Home;
