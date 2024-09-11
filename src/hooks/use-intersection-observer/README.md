# useWindowSize

Monitors the visibility of an element.

## Usage

```jsx
import useIntersectionObserver from 'reactnexthook';

const ExampleComponent = () => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div>
      <div ref={ref} style={{ height: '100px', background: 'lightgray' }}>
        Observe me
      </div>
      <p>{entry?.isIntersecting ? 'In view' : 'Out of view'}</p>
    </div>
  );
};

```

## Parameters

- `options` (IntersectionObserverInit): Options for the IntersectionObserver (e.g., `{ threshold: 0.5 }`).

## Return Value

- `[ref, entry]` (Array):
- `ref` (React.RefObject): A React ref to attach to the element you want to observe.
- `entry` (IntersectionObserverEntry | null): An entry object that contains information about the observed element's intersection state.

