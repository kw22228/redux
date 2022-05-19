## redux

1. npm install redux

2. import { createStore } from 'redux'

3. const store = createStore(reducer);
   리듀서를 통해서만 사용가능.(리듀서는 함수, data를 수정하는.)

4. reducer가 return하는게 store의 data이다.

5. store.dispatch({type: "hello"})
   store -> dispatch -> action -> reducer -> store

6. {type: "ADD"}
   action은 reducer와 소통하는 방법. (reducer에게 ADD하라고 알려줌)
   action은 무조건 object, type property가 있어야함.

7. subscribe (observer)
   store가 변화하는걸 감지한다. (reducer에서 action을 받고 새로운 state를 return)
