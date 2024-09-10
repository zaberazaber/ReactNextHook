# useObjectFit

Syncs state with localStorage, allowing data persistence across page reloads.

## Usage

```jsx
import useLocalStorage from 'reactnexthook';

const ExampleComponent = () => {
  const [value, setValue] = useLocalStorage('myKey', 'defaultValue');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
```

## Parameters

- `key` (string, optional): The key for localstorage.
- `initialvalue` (any, optional): The height of the parent container. Default is `1`.


## Return Value

- `[storedValue, setStoredValue]` (Array):
- `storedValue (any)` The current value from localStorage.
- `setStoredValue (function)` Function to update the value in localStorage.
