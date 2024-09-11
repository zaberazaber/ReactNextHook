# useWindowSize

A hook to keep track of the previous value of a state or prop.


## Usage

```jsx
import usePrevious from 'reactnexthook';

const ExampleComponent = () => {
  const [value, setValue] = useState(0);
  const prevValue = usePrevious(value);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};


```

## Parameters

- `value` (any): The value to keep track of.

## Return Value

- `previousValue` (any): The previous value of the input value.

