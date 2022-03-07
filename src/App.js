import React, {useState} from 'react'
import Login from './Login'
import Homepage from './Homepage';
import './style.css'
import { authentication,  } from './services/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"


function App() {

const [showModal, setShowModal] = useState(false)

const SignInWithGoogle =() => {

  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
  .then((result)  => 
  console.log(result)
  )
  .catch((err) => console.log(err))
  }

const openModal = () => {
 
  setShowModal((showModal) => !showModal)
}
  return (
    <div className="App"> 
    <Homepage openModal = {openModal}/>

    {showModal ? <Login setShowModal = {setShowModal} SignInWithGoogle = {SignInWithGoogle} />: null}
    
    </div>
  );
}

export default App;
