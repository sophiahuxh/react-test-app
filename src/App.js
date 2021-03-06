import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Home = () => (
    <div>
      <h2> Home </h2>
    </div>
)

const About = () => (
    <div>
      <h2> About </h2>
    </div>
)

const Topic = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3> {match.params.topicId} </h3>
    </div>
)}

const Topics = (props) => {
  console.log(props);
  let match = props.match;
  return (
    <div>
      <h2> Topics </h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}> Rendering with React </Link>
        </li>


        <li>
          <Link to={`${match.url}/component`}> Components </Link>
        </li>


        <li>
          <Link to={`${match.url}/props-v-state`}> Props v. State </Link>
        </li>
      </ul>


      <Route path={`${match.path}/:topicId`} component = {Topic}/>
      <Route exact path= {match.path} render={
        () => (<h3> Please select a topic. </h3>)
      } />
    </div>
)}


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/topics"> Topics </Link></li>
      </ul>

      <hr/>


      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
    </div>
  </Router>
)

export default BasicExample;
