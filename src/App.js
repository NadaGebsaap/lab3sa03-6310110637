import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';
    const word1 = "Hello";
    const word2 = "Computer";
    const word3 = "Light";

function App() {
    return (
        
    <div className='body'>
        <h1 className='header'>Welcome to CARD GAMEシ</h1>
        <p className='border_blue'>Please arrange the words correctly.</p>
     {
      <WordCard value="hello"/>
     }
     {
        <WordCard value="computer"/>
     }
     {
        <WordCard value="light"/>
     }
     </div>
     );
    }

export default App;