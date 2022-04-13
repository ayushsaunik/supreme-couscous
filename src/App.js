import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userInputs, setUserInputs] = useState({
    Name : "",
    Sem : "",
    Age : "",
    USN : "",
    Phone : ""

  })
  const handleChange = (event) => {
  setUserInputs({
    [event.target.Name]:(event.target.value),
    [event.target.Sem]:(event.target.value),
    [event.target.Age]:(event.target.value),
    [event.target.USN]:(event.target.value),
    [event.target.Phone]:(event.target.value)
  })
  }
  const [shouldIShowValue, setShouldIShowValue] = useState(false)
  const func = () => {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <label> Name </label>
        <input type="text" name="Name"  onChange={handleChange} value={userInputs.Name}/>
        <label> Semester </label>
        <input type="text" name="Sem"  onChange={handleChange} value={userInputs.Sem}/>
        <label> Age </label>
        <input type="Number" name="Age"  onChange={handleChange} value={userInputs.Age}/>
        <label> USN </label>
        <input type="text" name="USN"  onChange={handleChange} value={userInputs.USN}/>
        <label> Phone </label>
        <input type="text" name="Phone"  onChange={handleChange} value={userInputs.Phone}/>
        {
          shouldIShowValue
          ?
          (<h1>{userInputs.Name}</h1>,
          <h1>{userInputs.Sem}</h1>,
          <h1>{userInputs.Age}</h1>,
          <h1>{userInputs.USN}</h1>,
          <h1>{userInputs.Phone}</h1>)
          :
          null
          }
        <button onClick={func}>Submit</button>
      </header>
    </div>
  );
}

export default App;
