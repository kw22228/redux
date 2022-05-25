import { useState } from 'react';

const TodoInsert = ({ addHandler }) => {
    const [text, setText] = useState('');

    const textChangeHandler = e => {
        setText(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        addHandler(text);
        setText('');
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="What is your todos?"
                value={text}
                onChange={textChangeHandler}
            />
            <button>Add</button>
        </form>
    );
};
export default TodoInsert;
