# useValueAfter

react hook to use values from an array after delay. when reaching the end of the array it will start from the beginning
This hook comes in handy when testing edge cases for a React component by generating a new set of props after a specific delay

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { useValueAfter } from 'use-value-after'

const TestComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

const updatePropsAfterMs = 1000
const testComponentProps = [
  {title: '', text: ''},
  {title: '', text: 'No title'},
  {title: 'Short title', text: ''},
  {title: 'Short title', text: 'Really small paragraph'}
]

const App = () => {
  const props = useValueAfter(testComponentProps, updatePropsAfterMs)
  return (
    <div className='App'>
      <TestComponent {...props} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

```

## Parameters

- `testComponentProps` (array): The value to itterate.
- `updatePropsAfterMs` (number): The delay in milliseconds.

## Return Value

- `arrayelement` (any): The debounced value that updates after the delay.

