import { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérer l'envoi du formulaire ici (ex : envoyer à une API ou envoyer un e-mail)
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire après l'envoi
    };

    return (
        <div className="contact-container">
            <h2>Contactez-nous</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
            <div className="contact-info">
                <h3>Informations de contact</h3>
                <p>Email : contact@monsalon.com</p>
                <p>Téléphone : +33 1 23 45 67 89</p>
                <p>Adresse : 123 Rue de la Beauté, Paris, France</p>
            </div>
        </div>
    );
};

export default Contact;
