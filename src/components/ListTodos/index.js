import React from 'react';

import {useQuery} from 'react-query';
import {TodoItem} from '../TodoItem/index';
import {getTodos} from '../../FireBase/index';

export const ListTodos = ({id}) => {
  const {data, error, isLoading, isError} = useQuery('todos', getTodos);

  if (isLoading) {
    return <p>LOADİNG</p>;
  }
  if (isError) {
    return <p>{error}</p>;
  } else {
    return (
      <React.Fragment>
        {data.map((data, key) => {
          return (
            <TodoItem
              key={key}
              name={data.name}
              completed={data.completed}
              id={data.id}
            />
          );
        })}

        <hr />
        <div>React app with react query</div>
      </React.Fragment>
    );
  }
};
