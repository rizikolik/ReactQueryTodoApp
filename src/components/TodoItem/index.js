import React from 'react';
import {useMutation, useQueryCache} from 'react-query';
import {updateTodo, deleteTodo} from '../../FireBase/index';

export const TodoItem = ({id, name, completed}) => {
  const queryCache = useQueryCache();

  const [mutateDelete] = useMutation(deleteTodo, {
    onSuccess: () => queryCache.invalidateQueries('todos'),
  });

  const [mutateCheck] = useMutation(updateTodo, {
    onMutate: newTodo => {
      queryCache.cancelQueries('todos');
      const previousQuery = queryCache.getQueryData('todos');
      queryCache.setQueryData('todos', oldQuery => {
        return oldQuery.map(group => {
          return group;
        });
      });
      return () => queryCache.setQueryData('todos', previousQuery);
    },
    onError: (err, newTodo, rollback) => rollback(),
    onSettled: newTodo => {
      queryCache.invalidateQueries('todos');
    },
  });

  const remove = () => {
    mutateDelete(id);
  };

  const onCheck = event => {
    mutateCheck({id, fields: {completed: event.target.checked}});
  };

  return (
    <li>
      <span>{name}</span>
      <input type='checkbox' onChange={onCheck} checked={!!completed} />
      <button onClick={remove}>Delete</button>
    </li>
  );
};
