# useWindowSize

A hook to debounce a value, delaying updates until after a specified delay period.
Debounces a value, delaying updates until after a specified delay period.

## Usage

```jsx
import useDebounce from 'reactnexthook';

const ExampleComponent = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};


```

## Parameters

- `value` (any): The value to debounce.
- `delay` (number): The debounce delay in milliseconds.

## Return Value

- `debouncedValue` (any): The debounced value that updates after the delay.

