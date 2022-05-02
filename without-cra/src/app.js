/* @jsx createElement */
import { render, createElement, Component } from './react';

class Hello extends Component {
    render() {
        return <h6>{this.props.children}</h6>;
    }
}

function Item(props) {
    return <li style={`color:${props.color}`}>{props.children}</li>;
}
const App = () => (
    <div id="wrap" style="color:orange">
        첫번째 엘리먼트!!
        <Hello>Hello Children.</Hello>
        <ul>
            <Item color="red">첫번째 아이템</Item>
            <Item color="blue" children="두번째 아이템" />
            <Item color="violet">세번째 아이템</Item>
        </ul>
    </div>
);

render(<App />, document.querySelector('#root'));
