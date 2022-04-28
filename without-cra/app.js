const vdom = {
    tag: 'div',
    props: {
        id: 'wrap',
        class: 'dummy',
    },
    children: [
        '첫번째 엘리먼트',
        {
            tag: 'h1',
            props: {},
            children: [
                'VirtualDom에 대해서..',
                {
                    tag: 'h6',
                    props: {
                        class: 'hello',
                    },
                    children: ['hello'],
                },
            ],
        },
    ],
};
function createDOM(vdom) {
    if (typeof vdom === 'string') {
        return document.createTextNode(vdom);
    }

    const element = document.createElement(vdom.tag);
    vdom.children.map(createDOM).forEach(element.appendChild.bind(element));

    return element;
}
document.querySelector('#root').appendChild(createDOM(vdom));

function createDOM2(vdom) {
    if (typeof vdom === 'string') {
        return document.createTextNode(vdom);
    }

    const element = document.createElement(vdom.tag); //div

    vdom.children
        .map(vdom => {
            if (typeof vdom === 'string') {
                return document.createTextNode(vdom);
            }

            const element = document.createElement(vdom.tag); //h1
            vdom.children.map(createDOM2).forEach(element.appendChild.bind(element));

            return element;
        })
        .forEach(element.appendChild.bind(element));

    return element;
}

document.querySelector('#root').appendChild(createDOM(vdom));

function p() {
    const a = 10;

    [1, 2, 3, 4, 5].map(i => {
        const b = 20;
        console.log(a);
    });
}
p();
function createDOM3({ tag, props, children }, pElem = document.querySelector('#root')) {
    const elem = document.createElement(tag);

    if (pElem) pElem.appendChild(elem);

    if (typeof children === 'object' && children.length > 0) {
        children.forEach(node => {
            if (typeof node === 'object') {
                createDOM(node, elem);
            } else {
                elem.textContent = node;
            }
        });
    }
}
