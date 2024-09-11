# useToggle

A simple hook to manage a boolean state for toggling.
Manages a boolean state for toggling.

## Usage

```jsx
import useToggle from 'reactnexthook';

const ExampleComponent = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <button onClick={toggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
};


```

## Parameters

- `initialValue` (boolean): The initial boolean state (default is false).

## Return Value

- `[value, toggle]` (Array):
- `value` (boolean): The current boolean state.
- `toggle` (function): A function that toggles the state between true and false.

