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
                        class: 'hi',
                    },
                    children: ['hello'],
                },
            ],
        },
    ],
};

function createDOM(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);
    node.children.map(createDOM).forEach(element.appendChild.bind(element));
    node.children.map(createDOM).forEach(() => {
        element.appendChild(element);
    });

    return element;
}
// document.querySelector('#root').appendChild(createDOM(vdom));

// function createDOM3({ tag, props, children }, pElem = document.querySelector('#root')) {
//     const elem = document.createElement(tag);

//     if (pElem) pElem.appendChild(elem);

//     if (typeof children === 'object' && children.length > 0) {
//         children.forEach(node => {
//             if (typeof node === 'object') {
//                 createDOM(node, elem);
//             } else {
//                 elem.textContent = node;
//             }
//         });
//     }
