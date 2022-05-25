import { TodoItem } from '.';

const TodoList = ({ todos }) => {
    if (todos.length === 0) {
        return <h3>Your todos are empty.</h3>;
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem {...todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
