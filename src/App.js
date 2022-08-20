import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';
    const word = "Hello";

function App() {
    return (
        
    <div className='App.header'>
        <h1 className='header'>Welcome to CARD GAME</h1>
        <p></p>
     {
      <WordCard value="hello"/>
     }
     {
        <WordCard value="computer"/>
     }
     </div>
     );
    }

export default App;