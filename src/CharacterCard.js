import React from 'react';
import './App.css';
import WordCard from './WordCard';
export default function CharacterCard(props) {
 return (
 <div className='card'>{props.value}</div>
 )
}
