import React, {useRef} from 'react'
import ReactDom from "react-dom";
import {FaGoogle} from "react-icons/fa"
import "./style.css"

const Modal = ({ setShowModal}) => {

// close the modal when clicking outside the modal.
const modalRef = useRef();
const closeModal = (e) => {
  if (e.target === modalRef.current) {
    setShowModal(false);
  }
};
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <form>
          <h1>login</h1>
            <div className='email--input'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
              type = "Email"
              placeholder='Email' 
              name = "Email" 
              autoComplete='off'
              aria-label='Email'
              className='email'
              />
            </div>
            <div className='password--input'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <input 
               type = "password"
               placeholder='Password'
               name='password'
               className='password'
               />
               </div>
               <div className='checkbox'>
               <input 
               type= "checkbox"
               name = "remember me"
               value= "remember"
               /><label>Remember me</label>
               </div>
               <div className='login--section'>
               <button className='login--button'>LOGIN</button>
               <span>Or login with</span>
               <button className='google--button'><FaGoogle/>Google</button>
               </div>
        </form>
        

      
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
  
  