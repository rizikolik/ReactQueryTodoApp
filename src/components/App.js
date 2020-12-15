import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import Todo from './todo';

const queryClient = new QueryClient();
function App() {
  console.log(process.env.REACT_APP_DATABASE_URI);
  //const url = `${}`;
  // console.log(url);
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

export default App;
