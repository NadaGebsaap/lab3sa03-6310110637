import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';
    const word = "Hello";

function App() {
    return (
    <div className='App.header'>
        
        <p ></p>
        Welcome to CARD GAME
        <p></p>
     {
      <WordCard value="hello"/>
     }
     </div>
     );
    }

export default App;