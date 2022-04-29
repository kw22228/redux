/* @jsx createElement */
import { render, createElement } from './react';

const vdom = (
    <div id="wrap" style="color:orange">
        첫번째 엘리먼트!!
        <h1 style="color:blue">
            VirtualDom에 대해서!!!
            <h6>hello</h6>
        </h1>
    </div>
);

render(vdom, document.querySelector('#root'));
