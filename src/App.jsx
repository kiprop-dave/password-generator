import { useEffect, useState } from 'react'
import styled from 'styled-components';
import Password from './components/password';
import SliderComponent from './components/slider';
import CheckBox from './components/checkBox';
import Strength from './components/strength';
import Button from './components/buttons';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1b1818;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10% 0 0 0;
  }
`
const AppContainer = styled.div`
  width: 30%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px){
    width: 95%;
    
  }
`
const Header = styled.header`
  color: #676060;
  height: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 1px yellow; */
`
const PasswordChoices = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
  padding: 0.3rem 1rem 0.8rem 1rem;
  background-color: #2a2525;
  /* border: solid 1px yellow; */
`
function App () {
  const [passwordParams, setPasswordParams] = useState({
    length: 0,
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: false
  })
  const [strength, setStrength] = useState("");
  const [password, setPassword] = useState("");

  const setBooleans = (par) => {
    setPasswordParams(prev => ({
      ...prev,
      [par]: !prev[par]
    }))
  }

  const setlength = (val) => {
    setPasswordParams(prev => ({
      ...prev,
      length: val
    }))
  }

  useEffect(() => {
    checkStrength();
  }, [passwordParams])

  const checkStrength = () => {
    const { length, upperCase, lowerCase, numbers, symbols } = passwordParams;
    const weak = length < 8;
    const medium = length > 8 && !symbols && !numbers && lowerCase && upperCase;
    const strong = length > 8 && lowerCase && upperCase && numbers;
    const veryStrong = length > 10 && lowerCase && upperCase && numbers && symbols;
    if (veryStrong) {
      setStrength("VERY STRONG");
    } else if (strong) {
      setStrength("STRONG");
    } else if (medium) {
      setStrength("MEDIUM");
    } else if (weak) {
      setStrength('WEAK');
    }
  }

  function getRandomChar (source) {
    let rand;
    rand = source.charAt(Math.floor(Math.random() * source.length));
    return rand;
  }

  function generatePassword () {
    const { length, upperCase, lowerCase, numbers, symbols } = passwordParams;
    const possibleChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"];
    let result = "";
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * 4);
        if (upperCase && lowerCase && numbers && symbols) {
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && !lowerCase && !numbers && !symbols) {
          result += getRandomChar(possibleChars[0])
        }
        else if (!upperCase && lowerCase && !numbers && !symbols) {
          result += getRandomChar(possibleChars[1])
        }
        else if (!upperCase && !lowerCase && numbers && !symbols) {
          result += getRandomChar(possibleChars[2])
        }
        else if (!upperCase && !lowerCase && !numbers && symbols) {
          result += getRandomChar(possibleChars[3])
        }
        else if (upperCase && lowerCase && !numbers && !symbols) {
          randomIndex = Math.floor(Math.random() * 2);
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && lowerCase && numbers && !symbols) {
          randomIndex = Math.floor(Math.random() * 3);
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && !lowerCase && numbers && symbols) {
          while (randomIndex === 1) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && !lowerCase && !numbers && symbols) {
          while (randomIndex === 1 || randomIndex === 2) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && !lowerCase && numbers && !symbols) {
          while (randomIndex === 1 || randomIndex === 3) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (!upperCase && lowerCase && numbers && !symbols) {
          randomIndex = Math.floor(Math.random() * 2) + 1;
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (!upperCase && lowerCase && !numbers && symbols) {
          while (randomIndex === 0 || randomIndex === 2) {
            randomIndex = Math.floor(Math.random() * 4);
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (!upperCase && lowerCase && numbers && symbols) {
          while (randomIndex === 0) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (!upperCase && !lowerCase && numbers && symbols) {
          while (randomIndex === 0 || randomIndex === 1) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
        else if (upperCase && lowerCase && !numbers && symbols) {
          while (randomIndex === 2) {
            randomIndex = Math.floor(Math.random() * 4)
          }
          result += getRandomChar(possibleChars[randomIndex]);
        }
      }
    }
    setPassword(result);
  }



  const upperCase = "Uppercase Letters";
  const lowerCase = "Lowercase Letters";
  const numbers = "Numbers";
  const symbols = "Symbols";

  return (
    <>
      <Page>
        <AppContainer>
          <Header>
            Password Generator
          </Header>
          <Password password={ password } />
          <PasswordChoices>
            <SliderComponent length={ passwordParams.length } change={ setlength } />
            <CheckBox text={ upperCase } action={ () => setBooleans("upperCase") } />
            <CheckBox text={ lowerCase } action={ () => setBooleans("lowerCase") } />
            <CheckBox text={ numbers } action={ () => setBooleans("numbers") } />
            <CheckBox text={ symbols } action={ () => setBooleans("symbols") } />
            <Strength strength={ strength } />
            <Button action={ generatePassword } />
          </PasswordChoices>
        </AppContainer>
      </Page>
    </>
  )
}

export default App
