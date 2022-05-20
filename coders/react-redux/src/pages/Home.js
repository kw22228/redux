import { useState } from 'react';
import { connect } from 'react-redux';

const Home = () => {
    const [text, setText] = useState('');
    const onChangeHandler = e => {
        setText(e.target.value);
    };
    const onSubmitHandler = e => {
        e.preventDefault();

        setText('');
    };
    return (
        <div>
            <h1>To do List</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={text} onChange={onChangeHandler} />
                <button>Add</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return { todos: state };
};

export default connect(mapStateToProps)(Home);
