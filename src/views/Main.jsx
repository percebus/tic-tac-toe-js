import Game from '../components/game/Game'
import { Link, goBack } from 'react-chrome-extension-router'

function Main (props) {
  const msg = props.message
  return (
    <div>
      <h1>tic-tac-toe</h1>
      <Game />
      <footer>
        <div>
          <span>{msg}</span>:&nbsp;
          <Link onClick={goBack}>
            Go Back
          </Link>
        </div>
      </footer>
    </div>
  )
} export default Main
