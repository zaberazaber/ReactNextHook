# useScrollSpy

A hook to debounce a value, delaying updates until after a specified delay period.
Debounces a value, delaying updates until after a specified delay period.

## Usage

```jsx
import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import useScrollSpy from "reactnexthook";

const App = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav className="App-navigation">
        <span
          className={
            activeSection === 0
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 1
        </span>
        <span
          className={
            activeSection === 1
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 2
        </span>
        <span
          className={
            activeSection === 2
              ? "App-navigation-item App-navigation-item--active"
              : "App-navigation-item"
          }
        >
          Section 3
        </span>
      </nav>
      <section className="App-section" ref={sectionRefs[0]}>
        <h1>Section 1</h1>
      </section>
      <section className="App-section" ref={sectionRefs[1]}>
        <h1>Section 2</h1>
      </section>
      <section className="App-section" ref={sectionRefs[2]}>
        <h1>Section 3</h1>
      </section>
    </div>
  );
};

export default App;


```

## Parameters

- `Parameter` (integer)	Default-0	Default value that is returned (optional)
- `offsetPx` (integer)	Default-0	Set offset (optional)
- `sectionElementRefs` [Ref]	Default-[] Array of Refs to observe (e.g. via React refs)
- `scrollingElement`	Ref	Default-Window	Target of the scrolling (e.g. via React refs)) (optional)

## Return Value

- `debouncedValue` (any): The debounced value that updates after the delay.

