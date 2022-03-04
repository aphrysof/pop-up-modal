import React, {useState} from 'react'
import Modal from './Modal';
import './style.css'


function App() {

const [showModal, setShowModal] = useState(false)

const openModal = () => {
 
  setShowModal((showModal) => !showModal)
}
  return (
    <div className="App">
    <button onClick = {openModal} className = "button">
      Form Popup
    </button>
    {showModal ? <Modal setShowModal = {setShowModal} />: null}
    </div>
  );
}

export default App;
