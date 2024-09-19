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
