import React, {useState} from "react";

import "./Contact.css"




function Contact() {

        const initialFormState = {
          name: '',
          email: '',
          reference: '',
          message: '',
        };

        const [formData, setFormData] = useState(initialFormState);

        const clearForm = (e) => {
            e.preventDefault();
            setFormData(initialFormState);
          };
    
    return (
        <>
            <div className="contact-container">
                <form>
                    
                    <div className="contact-form">
                    <h2 className="titel-name">Kontakt</h2>
                    <p className="titel-name">Schreib uns</p>
                    <p >
                        <label className="label-name">
                             Name
                        </label>
                        <span>
                            <input 
                                className="userinput" 
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        </span>
                    </p>
                    <p >
                        <label className="label-name">
                             E-Mail
                        </label>
                        <span>
                            <input 
                                className="userinput"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                        </span>
                    </p>
                    <p >
                        <label className="label-name">
                             Betreff
                        </label>
                        <span>
                            <input 
                                className="userinput"
                                type="reference"
                                id="reference"
                                value={formData.reference}
                                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}/>
                        </span>
                    </p>
                    <p >
                        <label className="label-name">
                             Nachricht
                        </label>
                        <span>
                            <textarea 
                                className="big-userinput"
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                            </textarea>
                        </span>
                    </p>
                    <p>
                        <button className="send-Button" onClick={clearForm}>Senden</button>
                    </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;