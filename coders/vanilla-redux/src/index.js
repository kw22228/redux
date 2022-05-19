const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const setCount = e => {
    let count = 0;

    return {
        add() {
            number.innerHTML = ++count;
        },
        minus() {
            number.innerHTML = --count;
        },
    };
};

const count = setCount();
add.addEventListener('click', count.add);
minus.addEventListener('click', count.minus);
