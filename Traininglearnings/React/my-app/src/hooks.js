//State Hooks 
// State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.To add state to a component, use one of these Hooks:

//useState declares a state variable that you can update directly.
//useReducer declares a state variable with the update logic inside a reducer function.
import React, { useState, useReducer, createContext, useRef } from 'react';

export function FormComponent() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You entered: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter text:
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

// export default FormComponent;

//useReducer is useful when the state logic is more complex, such as when you need to manage multiple related values or perform state transitions based on different actions. It works similarly to how reducers in Redux work: you have a state, and you dispatch actions to modify the state.The logic for how the state is updated is handled in a reducer function.

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export function CounterComponent() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

// export default CounterComponent;

//Context Hooks 
//Context lets a component receive information from distant parents without passing it as props.For example, your app’s top - level component can pass the current UI theme to all components below, no matter how deep.
//useContext reads and subscribes to a context. The useContext hook in React allows you to access and share state or data across multiple components without the need to manually pass props down through every level of the component tree. It simplifies state management, especially when dealing with deeply nested components.
//Creating a Context: You create a context using React.createContext(). This generates a provider and a consumer.Provider: The provider component wraps the part of your component tree where you want to share the data.It provides the context value to all the components inside it. Consumer(via useContext): Any component within the provider can access the context value using useContext.


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// export default ThemeContext;

//Ref Hooks Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID.Unlike with state, updating a ref does not re - render your component.Refs are an “escape hatch” from the React paradigm.They are useful when you need to work with non - React systems, such as the built -in browser APIs.useRef declares a ref.You can hold any value in it, but most often it’s used to hold a DOM node.
//Unlike state, updating a ref doesn’t cause the component to re-render. Refs are mostly used to interact with non-React parts of the application, such as:Accessing and manipulating DOM elements directly.
//useRef is a React hook that allows you to create a reference object. This object has a .current property that persists across renders and can be updated without re-rendering the component.


export function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Use the ref to directly access the DOM node and focus it
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
            <button onClick={handleFocus}>Focus the input</button>
        </div>
    );
}

export default FocusInput;

//Effect Hooks Effects let a component connect to and synchronize with external systems.This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.useEffect connects a component to an external system.


//Performance Hooks  common way to optimize re - rendering performance is to skip unnecessary work.For example, you can tell React to reuse a cached calculation or to skip a re - render if the data has not changed since the previous render.To skip calculations and unnecessary re - rendering, use one of these Hooks:useMemo lets you cache the result of an expensive calculation.useCallback lets you cache a function definition before passing it down to an optimized component.const memoizedValue = useMemo(() => expensiveComputation(args), [dependencies]);
const memoizedValue = useMemo(() => expensiveComputation(args), [dependencies]);
//dependencies: An array of values that, when changed, cause useMemo to recompute the result.

const memoizedCallback = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
}, [count]);