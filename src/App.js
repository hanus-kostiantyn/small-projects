import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
        
        {/* <Accordian/> */}

        {/* <RandomColor/> */}

        <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
