// importing stylesheet
import '../css/Contact.css';
// importing components
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <>
            <div className='margin-block-50 page'>
                <h1 className='page-heading txt-ctr'>CONTACT ME</h1>

                <div className='line'>
                    <div className='hr'></div>
                    <div className='x'>XXX</div>
                    <div className='hr'></div>
                </div>

                <ContactForm />

            </div>
        </>
    );
};
