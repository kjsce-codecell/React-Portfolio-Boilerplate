// importing stylesheet
import '../css/Contact.css';
// importing components
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <>
            <div className='contact-page'>
                <h1 className='page-heading txt-ctr' id='contact'>Contact Me</h1>

               <hr />

                <ContactForm />

            </div>
        </>
    );
}
