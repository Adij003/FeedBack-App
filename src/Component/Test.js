import logo from './logo.svg';
import './App.css';

// This is a test page with all the important info and stuff for reference 

function App() {
  const comment = [
    {id: 1, text: 'This is line 1'},
    {id: 2, text: 'This is line 2'},
    {id: 3, text: 'This is line 3'},
    {id: 4, text: 'This is line 4'},
  ]
  return (
    <div className="App">
      {
        comment.map((name, index) =>(
          <div key={name.id}>{name.text}</div>
          // We have to provide a unique key, we can also use index as a key
        ))
      }
    </div>
  );
}

export default App;
