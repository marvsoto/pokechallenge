import './App.css';

function App() {
  return (
    <>
      <div className="main-header">
        <h1 className="logo">
          Pokechallenge
        </h1>
        <div className="main-search">
          <form>
            <input 
                type="text"
                name="poke_name"
                placeholder="What is your favorite Pókemon?"
            />
          </form>
        </div>
        <a className="favorite-link" href="#">
          Favorites
        </a>
      </div>
      <div className="pokemon-card">
        <button className="material-icons favorite"
            onClick = {() => {}}
        >
          favorite
        </button>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="pokemon name"/>
        <div>
          <h1>
            Charizard <span>No. 06</span>
          </h1>
          <p><strong>Height:</strong> <span>2 mts</span></p>
          <p><strong>Weight:</strong> <span>100 kg</span></p>
          <p><strong>Types:</strong></p>
          <ul>
            <li className="type flying">
              Flying
            </li>
            <li className="type fire">
              Fire
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
