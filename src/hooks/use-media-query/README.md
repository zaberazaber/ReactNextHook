# useMediaQuery

A hook to handle media queries and responsiveness.


## Usage

```jsx
import useMediaQuery from 'reactnexthook';

const ExampleComponent = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return <div>{isSmallScreen ? 'Small screen' : 'Large screen'}</div>;
};


```

## Parameters

- `query` (string): The media query string to match (e.g., '(max-width: 600px)').

## Return Value

- `matches` (boolean): true if the media query matches, false otherwise.

