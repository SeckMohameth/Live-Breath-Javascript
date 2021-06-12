import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop'

function Todo(props) {
    const [ modalIsOpen, setModalOpen ] = useState(false);

    //delete the card when btn is clicked
    function deleteHandler() {
        setModalOpen(true);
    }

    function closeModal(){
        setModalOpen(false);
    }

    return(
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        { modalIsOpen ? <Modal onCancel={closeModal} onConfirm={closeModal}/> : null }
        { modalIsOpen ? <Backdrop onClick={closeModal}/> : null}
      </div>
    )
} 

export default Todo;