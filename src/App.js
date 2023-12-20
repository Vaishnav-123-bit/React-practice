
import './App.css';
import Accoridan from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className='App'>
      <Accoridan/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App;
