# useEventCallback

A React hook that listens to changes in the window size and provides the current width and height.
Ensures that a callback function is stable and not recreated on every render.

## Usage

```jsx
import useEventCallback from 'reactnexthook';

const ExampleComponent = () => {
  const handleClick = useEventCallback(() => {
    console.log('Button clicked');
  });

  return <button onClick={handleClick}>Click me</button>;
};

```

## Parameters

- `callback` (function): The callback function to be stabilized.

## Return Value

- `eventCallback` (function): A stable callback function that retains the latest version of the       callback without being recreated on every render.      

