import phrases from "./assets/phrases.json";
import { getRandomNumber } from "./utils/randomNumber";
import './App.css'
import { useState } from "react";
import Phrase from "./components/Phrase/Phrase";
import Button from "./components/Button/Button"
import space_1 from "./assets/space_1.jpg"
import space_2 from "./assets/space_2.jpg"
import space_3 from "./assets/space_3.jpg"
import space_4 from "./assets/space_4.jpg"


const backgrounds= [space_1, space_2, space_3, space_4]

function App() {
  const getRandomPhrase= () => phrases[getRandomNumber(phrases.length-1)];
  const getRandomBackground= () => backgrounds[getRandomNumber(backgrounds.length-1)]

  const [phraseObject, setPhraseObject]= useState(getRandomPhrase);
  const [background, setBackground] = useState(getRandomBackground())
  
  const changePhrase = () => {
    let newPhrase= getRandomPhrase();
    let newBackground= getRandomBackground();

    while (newPhrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }
    while (newBackground === background) {
      newBackground = getRandomBackground();
    }

    setPhraseObject(newPhrase)
    setBackground(newBackground)
  }
  return (
    <div className="container_app" style={{backgroundImage: `url("${background}")`}}>
      <h1 className="tittle">INTO THE UNKNOWN</h1>
      <Phrase phrase={phraseObject.phrase}/>
      <p>{phrases.phrase}</p>
      <p className="author">
        Author: {phraseObject.author}
      </p>
      <div className="button_container">
        <Button handlerClick={changePhrase}/>
      </div>
    </div>
  )
}

export default App
