const hooks = [];
let curComponent = 0;

export class Component {
    constructor(props) {
        this.props = props;
    }
}

function createDOM(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    Object.entries(node.props).forEach(([key, value]) => element.setAttribute(key, value));
    node.children.map(createDOM).forEach(element.appendChild.bind(element));

    return element;
}

function makeProps(props, children) {
    return {
        ...props,
        children: children.length === 1 ? children[0] : children,
    };
}

function useState(initValue) {
    let position = curComponent - 1;

    if (!hooks[position]) {
        hooks[position] = initValue;
    }

    const modifier = nextValue => {
        hooks[position] = nextValue;
    };

    return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
    props = props || {};

    if (typeof tag === 'function') {
        //클래스 컴포넌트 라면
        if (tag.prototype instanceof Component) {
            const instance = new tag(makeProps(props, children));
            return instance.render();
        }

        hooks[curComponent] = null;
        curComponent++;

        if (children.length > 0) {
            return tag(makeProps(props, children));
        } else {
            return tag(props);
        }
    } else {
        return {
            tag,
            props,
            children,
        };
    }
}
export function render(vdom, container) {
    container.appendChild(createDOM(vdom));
}

export const renderDiff = (function () {
    let prevDom = null;
    return function (vdom, container) {
        if (prevDom === null) {
            prevDom = vdom;
        }

        //diff 알고리즘

        container.appendChild(createDOM(vdom));
    };
})();
