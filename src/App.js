import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import characters, { Rick } from './data.js'
import Nav from "./components/Nav.jsx"

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav />
      </div>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
