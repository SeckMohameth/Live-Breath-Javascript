import Modal from './components/Modal'
import Todo from './components/Todo'
import Backdrop from './components/Backdrop'


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='learn react'/>
      <Todo text='master react'/>
      <Todo text='learn next'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
