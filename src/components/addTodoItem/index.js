import React, {useRef} from 'react';
import {addDocumentsToCollection, getTodos} from '../../FireBase/index';
import {useQueryCache, useMutation} from 'react-query';
function AddTodos() {
  const queryCache = useQueryCache();
  const inputRef = useRef();
  const [mutateAdd] = useMutation(addDocumentsToCollection, {
    onSuccess: () => queryCache.invalidateQueries('todos'),
  });
  const handleAdd = () => {
    mutateAdd({name: inputRef.current.value, completed: false});
    inputRef.current.value = '';
  };

  return (
    <>
      <input ref={inputRef} />

      <button onClick={handleAdd}>Submit</button>
    </>
  );
}
export default AddTodos;
