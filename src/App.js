
import './App.css';
import RandomNumber from './components/RandomNumber';

import Todos from './components/SimpleTodos1/simpletodos1';
import Destination from './components/DestinationSearch/destinationsearch';
import Withdrwal from './components/withdrwal';
import Calculator from './components/Calculator1';
import Google1 from './components/GoogleS/Google1';
import HistoryListApp from './components/BrowserSearch/Browser';


function App() {
  return (
    <>
    
    <RandomNumber/>
    
    <Google1/>
    <Todos/>
    <Destination/>
    <Withdrwal/>
    <Calculator/>
    <HistoryListApp/>
  

    
    </>
  );
}

export default App;



