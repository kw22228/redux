import { useState } from 'react';

const TodoInsert = () => {
    const [text, setText] = useState('');

    const textChangeHandler = e => {
        setText(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();

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
