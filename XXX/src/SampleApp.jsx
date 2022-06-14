import React from 'react'

import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router
} from 'react-chrome-extension-router'

const Three = ({ message }) => (
  <div onClick={() => popToTop()}>
    <h1>{message}</h1>
    <p>Click me to pop to the top</p>
  </div>
)

const Two = ({ message }) => (
  <div>
    This is component Two. I was passed a message:
    <p>{message}</p>
    <button onClick={() => goBack()}>
      Click me to go back to component One
    </button>
    <button onClick={() => goTo(Three, { message })}>
      Click me to go to component Three!
    </button>
  </div>
)

const One = () => {
  return (
    <Link component={Two} props={{ message: 'I came from component one!' }}>
      This is component One. Click me to route to component Two
    </Link>
  )
}

function SampleApp () {
  return (
    <Router>
      <One />
    </Router>
  )
}

export default SampleApp
