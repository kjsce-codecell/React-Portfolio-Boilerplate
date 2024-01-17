// importing stylesheet
import '../css/Contact.css';
// importing components
import ContactForm from '../components/ContactForm';

export default function Contact() {
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // send email
    }
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
