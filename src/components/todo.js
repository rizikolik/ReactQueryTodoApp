import {addDocumentsToCollection, getTodos} from '../FireBase/index';
import {useQuery, QueryClient} from 'react-query';
function Todo() {
  //Get The Client
  const queryClient = new QueryClient();

  const {data, error, isLoading, isError} = useQuery('todos', getTodos);
  const handleAdd = data => {
    addDocumentsToCollection(data);
  };
  if (isLoading) {
    return <p>LOADİNG</p>;
  }
  if (isError) {
    return <p>{error}</p>;
  }
  return (
    <div className='App'>
      {console.log(data)}
      {data.map(data => {
        return <ul>{data.name}</ul>;
      })}
      <hr />
      <div>React app with react query</div>
    </div>
  );
}
export default Todo;
