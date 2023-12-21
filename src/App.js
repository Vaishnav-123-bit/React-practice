
import './App.css';
import Accoridan from './components/accordian';
import LoadmoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className='App'>
      {/* <Accoridan/>
      <RandomColor/>
      <StarRating noOfStars={10}/> */}

      {/* <LoadmoreData/> */}

      <TreeView menus={menus }/>
    </div>
  )
}

export default App;
