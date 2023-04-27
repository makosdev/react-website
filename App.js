import './App.css';

function App() {
  const openYoutube = () => {
    window.open("https://www.youtube.com/channel/UCOdfRndfPV2UWrAqnx_sWbA", "_blank");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openYoutube} className="Youtube-button">
          Open YouTube
        </button>
      </header>
    </div>
  );
}

export default App;
