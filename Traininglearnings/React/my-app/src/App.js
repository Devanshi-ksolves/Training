//React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. 

function MyButton() {
  return (
    <button>
      My Button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome</h1>
      <MyButton />
    </div>
  )
}

//JSX is an extension to JavaScript that allows you to write HTML-like markup in a JavaScript file. It is similar to HTML, but stricter and able to display dynamic information
//Conditional rendering 
let content;
if (loggedIn)
  content = <Admin />
else
  content = <LoginPage />

return (
  <div>
    {content}
  </div>
)

//rendering list
const fruits = [
  { title: 'Mango', id: 1 },
  { title: 'Apple', id: 2 },
  { title: 'Grapes', id: 3 },
]
export default function ShoppingList() {
  const listItem = fruits.map(fruit =>
    <li key={fruit.id}>
      {fruit.title}
    </li>
  );

  return (
    <ul>
      {listItem}
    </ul>
  )
}

//Responding to events 
export default function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

//Updating the screen 
import { useState } from 'react';
export default function MyButton() {
  const [count, setCount] = useState(0);
  function handleclick() {
    setCount(count + 1);
  };
  return (
    <button onClick={handleclick}>
      click {count} times
    </button>
  )

}

//Sharing data between components 
//The information you pass down like this is called props.Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.
export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>

  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>click {count} time</button>
  );
}

//class component extend React.Component. They must include a render() method that returns JSX. They manage state using this.state and update state using this.setState().
//Functional Components: Initially, they were stateless. However, with the introduction of Hooks (like useState), functional components can now manage state.


//State represents data that can change over time within a component. It is local to the component and can be updated dynamically, triggering a re-render of the component.
//Used in functional components via the useState hook.
const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

//Props (short for properties) are read-only data passed from a parent component to a child component. They help make components reusable and allow communication between components.
//Props are used to pass data or event handlers from a parent component down to child components.
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>click {count} time</button>
  );
}

//Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
//A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
//Note that error boundaries only catch errors in the components below them in the tree.An error boundary can’t catch an error within itself. 
//Error boundaries are particularly useful for catching runtime errors in production to ensure the app stays functional, even if some part fails.

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>

import { CounterComponent } from './hooks';
function App() {
  return (
    <div>
      <h1>React Hooks Example</h1>
      <h2>Counter Component (useReducer):</h2>
      <CounterComponent />
    </div>
  );
}

// export default App;

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from './hooks';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}


function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API with useContext Hook</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

// export default App;

import { FocusInput } from './hooks';
function App() {
  return (
    <div>
      <h1>React Hooks Example</h1>
      <FocusInput />
    </div>
  );
}

// export default App;