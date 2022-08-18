import React from 'react';
import CharacterCard from './CharacterCard';
const activationHandler = c => { console.log(`${c} has been activated.`) }
export default function WordCard(props){
 return (
 <div>
    <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
 </div>
 );
}