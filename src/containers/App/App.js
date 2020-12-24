import './App.css';
import {TodoContainer} from '../Todos';

function App() {
  console.log(process.env.REACT_APP_DATABASE_URI);
  //const url = `${}`;
  // console.log(url);
  return <TodoContainer />;
}

export default App;
