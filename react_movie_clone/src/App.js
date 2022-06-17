import './App.css';

function Food(props){
  console.log(props)
  return <h1> I like Potato! </h1>
}
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Food fav = "SEUNGJUN"/>
    </div>
  );
}

export default App;
