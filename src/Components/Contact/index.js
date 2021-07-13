import './contact.scss';
import  { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';



const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage ] = useState();


    const onSubmit = (data, event) => {
      emailjs.sendForm('service_vi1j4u6', 'template_i17ciu1', event.target, `${process.env.REACT_APP_EMAIL_USER_ID}`)
    .then((result) => {
        setMessage('Votre e-mail a été envoyé merci !')
        event.target.reset();
    }, (error) => {
        console.log(error.text);
    });}

    /**
     * timer pour effacer le message aprés l'envoi du formulaire
     * @param {string} message 
     * @return {void}
     */
    const messageTimer = (message) => {
      if(message){
        setTimeout(()=> {
          setMessage('');
        }
        ,3000);
      };
    };

    useEffect(() => {
      messageTimer(message);
    },[message]);

  return (
    <div className="contact--container">
      <h1>Me contacter part email</h1>
      <div className="form--container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nom et prénom" name="name" {...register("name",{ required: true, minLength: 3 })} />
            <input placeholder="Votre adresse mail" name="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
            <TextField
                className="textField"
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Me laisser un petit message"
                variant="outlined"
                name="message"
                {...register("message",{ required: true })}
            />
            {errors.exampleRequired && <span>Un champ n'est pas rempli!</span>}
            {message && <span>{message}</span>}
            <input className="submit--button" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;