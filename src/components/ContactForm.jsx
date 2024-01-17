// importing from react
import { useState, useEffect } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        subject: "",
        subjectError: "",
        message: "",
        messageError: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        });
    }

    function handleSubmit(event) {
        // checking condition if name is empty
        if (!formData.name) {
            setFormData(prevFormData => ({
                ...prevFormData,
                nameError: "Name cannot be empty"
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                nameError: ""
            }));
        }

        if (!formData.email) {
            setFormData(prevFormData => ({
                ...prevFormData,
                emailError: "Email cannot be empty"
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                emailError: ""
            }));
        }

        if (!formData.subject) {
            setFormData(prevFormData => ({
                ...prevFormData,
                subjectError: "Subject cannot be empty"
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                subjectError: ""
            }));
        }

        if (!formData.message) {
            setFormData(prevFormData => ({
                ...prevFormData,
                messageError: "Message cannot be empty"
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                messageError: ""
            }));
        }

        event.preventDefault();
        // send data
        fetch("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzLqwQLT1hJ5-JTHyBG149W7h4RvW5YNYUjRroYnqIEu176pVx9oh7umhd83i6sEi5iIw/exec", {
            method: "POST",
            body: {
                Name: formData.name,
                Email: formData.email,
                Subject: formData.subject,
                Message: formData.message
            }
        })
            .then((response) => response.json())
            .then((data) => { console.log(data) })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form margin-block-20">
                <div className="input-div">
                    <input
                        className={`input ${formData.nameError && "error-border"}`}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    {formData.nameError && (<span className="error-text">{formData.nameError}</span>)}
                </div>

                <div className="input-div">
                    <input
                        className={`input ${formData.nameError && "error-border"}`}
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {formData.emailError && (<span className="error-text">{formData.emailError}</span>)}
                </div>

                <div className="input-div">
                    <input
                        className={`input ${formData.subjectError && "error-border"}`}
                        type="subject"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                    />
                    {formData.subjectError && (<span className="error-text">{formData.subjectError}</span>)}
                </div>

                <div className="input-div">
                    <textarea
                        className={`input textarea ${formData.messageError && "error-border"}`}
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                    ></textarea>
                    {formData.messageError && (<span className="error-text">{formData.messageError}</span>)}
                </div>

                <div className="input-div">
                    <button
                        className="button"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </>
    );
};
