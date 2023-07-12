import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;



const Checkout = (props) => {
  const[formInputValidity, setFormInputValidity]= useState({
    name:true,
    street: true,
    city: true,
    pincode: true,
  })


  const nameInputRef=useRef();  
  const streetInputRef=useRef();  
  const pincodeInputRef=useRef();  
  const cityInputRef=useRef();  
  
  
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsvalid = !isEmpty(enteredName);
    const enteredStreetIsvalid = !isEmpty(enteredStreet);
    const enteredPincodeIsvalid = isSixChars(enteredPincode);
    const enteredCityIsvalid = !isEmpty(enteredCity);

    setFormInputValidity({
        name:enteredNameIsvalid,
        street: enteredCityIsvalid,
        city: enteredCityIsvalid,
        pincode: enteredPincodeIsvalid
    })

    const formIsValid = 
        enteredNameIsvalid && 
        enteredStreetIsvalid && 
        enteredPincodeIsvalid && 
        enteredCityIsvalid;


    if(!formIsValid){
        return;
    }
    
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        pincode: enteredPincode,
        city: enteredCity,
    })
 };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name ? '': classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>Please enter your name.</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.street ? '': classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street && <p>Please enter your street.</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.pincode ? '': classes.invalid}`}>
        <label htmlFor='pincode'>Pin Code</label>
        <input type='text' id='pincode' ref={pincodeInputRef}/>
        {!formInputValidity.pincode && <p>Please enter valid Pincode.</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '': classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city && <p>Please enter your city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;