# useWindowSize

A hook to detect clicks outside a specific element.
Detects clicks outside a specific element.

## Usage

```jsx
import useOnClickOutside from 'reactnexthook';

const ExampleComponent = () => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    console.log('Clicked outside');
  });

  return <div ref={ref}>Click outside this element</div>;
};


```

## Parameters

- `ref` (React.RefObject): A React ref attached to the element you want to monitor.
- `callback` (function): The callback function to execute when a click is detected outside the referenced element.

## Return Value

- `undefined` This hook does not return any value.

