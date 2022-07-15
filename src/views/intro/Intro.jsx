import Main from '../main/Main'
import { Link } from 'react-chrome-extension-router'

function Intro () {
  return (
    <div>
      <h1>React JS</h1>
      <h2>tutorial app</h2>
      <Link component={Main} props={{ message: 'I came from Intro.jsx' }}>
        Go to the Game
      </Link>
    </div>
  )
} export default Intro
