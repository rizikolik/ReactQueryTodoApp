import './App.css';
import Todo from './todo';

function App() {
  console.log(process.env.REACT_APP_DATABASE_URI);
  //const url = `${}`;
  // console.log(url);
  return (
    <div className='App'>
      <Todo />
    </div>
  );
}

export default App;
