# useFetch

A hook for fetching data from an API with error handling and loading state.
Fetches data from an API with error handling and loading state.

## Usage

```jsx
import useFetch from 'reactnexthook';

const ExampleComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
};


```

## Parameters

- `url` (string): The URL to fetch data from.

## Return Value

- `data` (any): The fetched data.
- `loading` (boolean): A boolean indicating if the data is still loading.
- `error` (Error | null): An error object if there was an error during fetch, or null if there was no error.

