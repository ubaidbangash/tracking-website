// import React, { useState } from 'react'
// import './Contact.css';

// const Contact = () => {

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const handleName = (event) => {
//     let name = event.target.value;
//     if (name.length < 5) {
//       setNameError(true);
//     } else {
//       setNameError(false);
//     }
//     setName(name);
//   }

//   const handleEmail = (event) => {
//     let email = event.target.value;
//     if (!email.match(emailRegex)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     setEmail(email);
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // alert(event.target[0].value + " " + event.target[1].value)

//     let name = event.target[0].value;
//     if (name.length < 5) {
//       setNameError(true);
//     } else {
//       setNameError(false);
//     }
//     let email = event.target[1].value;
//     if (!email.match(emailRegex)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     if((!name.length < 5) && (email.match(emailRegex)))
//     {
//       alert('Form has been submitted');
//       alert('name=' + name + " email= " + email); 
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='form-text'>
//         <div className='name-area'>
//           <label>Name</label>
//           <input type='text' name='name' onChange={handleName} value={name}  />
//           <br />
//           {nameError ? <span style={{ color: 'red' }}>name length must be greater than 4 characters</span> : ""}
//           <br /><br />
//         </div>
//         <div className='email-area'>
//           <label>Email</label>
//           <input type='text' name='email' onChange={handleEmail} value={email} />
//           <br />
//           {emailError ? <span style={{ color: 'red' }}>invalid email</span> : ""}
//           <br /><br />
//         </div>
//         <div className='button-area'>
//           <input type='submit' value='Submit' />
//         </div>

//       </div>
//     </form>
//   )
// }

// export default Contact

import React from 'react'
const Contact = () => {
  return (
    <div>Contact</div>

  )
}

export default Contact