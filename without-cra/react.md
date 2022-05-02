### JSX

-   DOM

DOM API를 이용하여 DOM을 제작하는 것을 DOM의 구조(JSX)로 변환해줌

/_ @jsx React.createElement _/
jsx문법을 default로 React.createElement의 함수로 변환해줌

createElement로 바꾸면 내가 만든 createElement함수로 인해서 동작

---

-   Functional Component

만약 createElement의 tag가 "첫번째 글자가 대문자" 이면 "값(함수)"로 취급하여
함수를 호출(tag()) 하고, 그 함수 안에는 JSX 즉, createElement함수로 return되어야함.

-   Class Component

props의 Context를 갖는 Component라는 클래스를 상속받고 하나의 컴포넌트가 삭제되기 전까지 그 인스턴스객체를 유지하다가 re-rendering될시 인스턴스객체의 render만 사용해서 재 랜더링한다.

-   Virtual Dom

Real DOM에서 props, state등.. 뭔가 업데이트 일어나여 재 랜더링하게 될때,
기존 Real DOM과 새로 업데이트된 DOM Virtual DOM의 diff를 하여 변경된 부분만
re-rendering하게 만들어줌.

-   Hooks

1. Hook이 호출되는 순서에 의존한다.(hook의 순서가 어긋나면 다른 hook들도 어긋남.)

2. 일반함수에서 다루지말라.
   일반함수는 createElement함수로 들어오지않기 떄문에 일반함수에서 hook을 사용해도
   반응 하지 않는다.
