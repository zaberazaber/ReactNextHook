# useEventListener

A hook to add and remove event listeners.

## Usage

```jsx
import useEventListener from 'reactnexthook';

const ExampleComponent = () => {
  useEventListener('resize', () => {
    console.log('Window resized');
  });

  return <div>Resize the window and check the console</div>;
};


```

## Parameters

- `eventName` (string): The name of the event to listen for (e.g., 'resize', 'click').
- `handler` (function): The callback function to handle the event.
- `element` (HTMLElement | Window): The DOM element to attach the event listener to (default is window).


## Return Value

- `undefined`: This hook does not return any value.

