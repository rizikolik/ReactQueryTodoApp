import React, {useState, useRef} from 'react';
import {addDocumentsToCollection, getTodos} from '../FireBase/index';
import {useQuery, QueryClient, useMutation} from 'react-query';
function Todo() {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  //Get The Client
  const queryClient = new QueryClient();
  const {data, error, isLoading, isError} = useQuery('todos', getTodos);

  const mutateAdd = useMutation('todos', addDocumentsToCollection, {
    onSuccess: () => {
      // Invalidate and refetch =>Forcing api to refresh (This is one of the points where this is differant from normal api calls..)
      queryClient.invalidateQueries('todos');
    },
  });

  if (isLoading) {
    return <p>LOADİNG</p>;
  }
  if (isError) {
    return <p>{error}</p>;
  } else {
    return (
      <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input
            type='text'
            name='name'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button onClick={() => mutateAdd.mutate({name})}>Submit</button>
        <React.Fragment>
          {data.map(data => {
            return (
              <div>
                <span>{data.name} </span>
                <input type='checkbox' defaultValue={data.completed} />
              </div>
            );
          })}
          <hr />
          <div>React app with react query</div>
        </React.Fragment>
      </>
    );
  }
}
export default Todo;
