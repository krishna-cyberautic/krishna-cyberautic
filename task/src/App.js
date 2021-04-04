import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {FetchData} from './components.js/fetchData';
import './App.css';
import { PostDetail } from './components.js/postDetail';
function App() {
  return (
    <div className="App">
      <Router>
      
    <Switch>
        <Route exact path="/" component={FetchData}/>
        <Route path="/view" component={PostDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
