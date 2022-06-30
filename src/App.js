import './App.css';
import Card from './components/Card.js';
import AlignRow from './components/Row.js';
import nastas from './nasta-data.js';
import pastas from './pasta-data.js';
import { useState, useEffect } from 'react';

const nasta_arr = nastas.split("\n");
const pasta_arr = pastas.split("\n");

function App() {
    let [pasta, setPasta] = useState("");
    let [nasta, setNasta] = useState("");
    let [choices, setChoices] = useState(['a', 'b']);

    let [reset, setReset] = useState(false);
    let [correct, setCorrect] = useState(false);
    let [chose, setChose] = useState(false);
    let [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 2));

    useEffect(() => {
        setNasta(nasta_arr[Math.floor(Math.random() * nasta_arr.length)]);
        setPasta(pasta_arr[Math.floor(Math.random() * pasta_arr.length)]);

        setReset(false);
        setChose(false);
        setRandomNum(Math.floor(Math.random() * 2));
    }, [reset]);

    useEffect(() => {
        let arr = [{correct: true, 'word': pasta}, {correct: false, 'word': nasta}];
        arr.sort(() => Math.random() - 0.5);
        console.log(arr);

        setChoices(arr);
    }, [pasta]);

    return (
        <>
            <div>Pasta or Nasta?</div>
            <AlignRow>
                {choices.map((choiceobj) => 
                    (<Card onClick={() => {
                            setChose(true);
                            setCorrect(choiceobj.correct);
                        }}>{choiceobj.word}</Card>)
                )}
            </AlignRow>
            <button onClick={() => {setReset(true)}}>Next game</button>
            <div>
                { chose ? (correct ? <>You did it!</> : <>better luck next time</>) : <></> }
            </div>
        </>
    );
}

export default App;
