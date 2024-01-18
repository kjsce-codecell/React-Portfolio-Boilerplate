// importing stylesheet
import '../css/Contact.css';
// importing components
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <>
            <div className='contact-page'>
                <h1 className='page-heading txt-ctr'>Contact Me</h1>

                <div className='divider'>
                    <div className='line'></div>
                    <div className='x'>XXX</div>
                    <div className='line'></div>
                </div>

                <ContactForm />

            </div>
        </>
    );
};
