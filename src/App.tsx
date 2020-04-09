import React from 'react';
import Blog from './components/Blog';
import { Heading } from './components/Heading';
import Person from './components/Person';
import logo from './logo.svg';
import './App.css';

const myPersonFunction = (input: string): string => {
  return 'Our person is important' + input;

}
const BlogArticleFunction = (content: string): string => {
  return 'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease. A bit of a learning curve but so useful now that we are getting the hang of it!'
   + content;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Blog title= "Time to React" callbackMethod={BlogArticleFunction} />
      <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name="Billy-Joe Bob"  status = "Married" gender = "Male" callbackMethod={myPersonFunction} />;
      </header>
    </div>
  );
}

export default App;
