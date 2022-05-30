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

---

### react-redux

1. npm install redux react-redux
   리액트용 리덕스를 설치

2. index.js
   import { Provider } from 'react-redux';

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
```

3. mapStateToProps(state, props)
   state는 redux store로부터 온 데이터
   props는 component로 부터온 properties

4. export default connect(mapStateToProps)(Home);
   mapStateToProps state를 return하면 Home 컴포넌트의 props로 받음
   connect가 Home의 props로 넘겨줌.

5. export default connect(null, mapDispatchToProps)(Todo);
   mapDispatchProps가 컴포넌트의 props로 Dispatch 메소드를 넘겨줌

---

### redux-toolkit

1. createAction

```javascript
const addTodo = createAction('ADD_TODO');

case addTodo.type:
   const addState = [{ text: action.payload.text, id: action.payload.id }, ...state];

   return addState;
```

-   dispatch는 무조건 action.payload를 타고 옴

```javascript
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text, id) =>
            dispatch(
                actionCreateors.addTodo(
                    { text, id } //payload로 들어감
                )
            ),
    };
};
```

2. createRudcer
   switch case문을 사용할 필요없음.
   state를 mutate해도 상관없음(state.push 사용가능) 대신 return을 하면 안된다.
   return을 할때에는 무조건 new state로 return해준다.

3. configureStore
   크롬 익스텐션에서 redux dev tools를 사용할 수 있다.

4. createSlice

-   name, initailState, reducers, actions 한번에 선언가능.

---

## redux saga

-   pure function컨셉을 지키는 redux에서는 사이드이펙트가 있는 비동기처리를 원하지 않는다. 따라서, redux는 redux-saga라는 미들웨어를 부착하였다.
-   redux-saga는 기존의 redux의 action을 중간에 가로채어 action을 재가공하여 다음 미들웨어 또는 리듀서(next 미들웨어가 없다면 reducer)에 넘긴다.

*   미들웨어는 커링된 함수로 만들어야한다.

```javascript
const middleware3 = store => next => action => {
    //action을 가로챔
    if (action.type === ActionType.ASYNC_INCREASE_COUNTER) {
        setTimeout(() => {
            next(Actions.increase());
        }, 1000);
    } else {
        next(action);
    }
};
```

#### logger 미들웨어

-   redux는 action의 메세지 내용만 봐도 어느정도 흐름을 알수 있기 때문에 logger라는 미들웨어를 (가장쉬운) 만들어서 사용하는 것도 좋음.

```javascript
export const logger = store => next => action => {
    const currentState = store.getState();

    //groupCollapsed를 쓰면 아래 log들을 접어준다.
    console.groupCollapsed('Action logger => ', action.type);
    console.log('Current state: ', currentState);
    console.log('Action payload ', action.payload);
    console.groupEnd();

    //logger는 액션을 바꿀 필요가없기 때문에 그냥 next로 넘긴다.
    next(action);
};
```
