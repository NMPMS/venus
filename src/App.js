import monkeGif from './monke.gif';

function App() {
  return (
    <div className="App">
      <div className="Interior">
        <div className="Construct">
          <img className="monkeGif" src={monkeGif} alt="monkeGif"/>
          <div className="Construct-Text">
            This webpage is not yet available. <br/>
            Enjoy this gif of a chimp licking your monitor.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;