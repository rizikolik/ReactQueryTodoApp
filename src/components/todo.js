import {addDocumentsToCollection} from '../FireBase/index';
function Todo() {
  //const url = `${}`;
  // console.log(url);

  const handleAdd = data => {
    addDocumentsToCollection(data);
  };
  return (
    <div className='App'>
      <input />
      <button onClick={handleAdd}>Addddddddddddddd</button>
      <hr />
      <div>React app with react query</div>
    </div>
  );
}
export default Todo;
