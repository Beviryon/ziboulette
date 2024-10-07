// src/components/Appointment.jsx
import { useState, useEffect } from 'react';
import './Appointment.css';
import { addDays, subDays, format } from 'date-fns';

const availableDays = ["2024-10-10", "2024-10-12", "2024-10-15", "2024-10-18"];
const availableTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

const Appointment = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errorMessage, setErrorMessage] = useState(''); // Nouveau état pour les messages d'erreur
    const [showErrorPopup, setShowErrorPopup] = useState(false); // État pour afficher/masquer le pop-up d'erreur

    useEffect(() => {
        const startOfWeek = subDays(currentDate, currentDate.getDay());
        const newWeek = Array.from({ length: 7 }, (_, i) => addDays(startOfWeek, i));
        setDaysOfWeek(newWeek);
    }, [currentDate]);

    const handleDayClick = (day) => {
        if (availableDays.includes(format(day, "yyyy-MM-dd"))) {
            setSelectedDay(day);
            setSelectedTime(null);
        }
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleSubmit = () => {
        if (selectedDay && selectedTime) {
            setShowForm(true);
        } else {
            setErrorMessage("Veuillez sélectionner un jour et une heure.");
            setShowErrorPopup(true); // Afficher le pop-up d'erreur
        }
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        alert(`Rendez-vous confirmé pour ${format(selectedDay, "dd-MM-yyyy")} à ${selectedTime}.\nConfirmation envoyée à : ${formData.email}`);
        setFormData({ name: '', email: '', phone: '' });
        setSelectedDay(null);
        setSelectedTime(null);
    };

    const goToNextWeek = () => {
        setCurrentDate(addDays(currentDate, 7));
    };

    const goToPreviousWeek = () => {
        setCurrentDate(subDays(currentDate, 7));
    };

    const closeErrorPopup = () => {
        setShowErrorPopup(false);
    };

    return (
        <div className="appointment-container">
            <h2>Prendre un rendez-vous</h2>
            <p>Sélectionnez un jour et une heure libre pour réserver votre créneau.</p>

            <div className="navigation">
                <button onClick={goToPreviousWeek}>Semaine précédente</button>
                <span>{format(currentDate, "MMMM yyyy")}</span>
                <button onClick={goToNextWeek}>Semaine suivante</button>
            </div>

            <div className="days-container">
                {daysOfWeek.map((day, index) => {
                    const formattedDay = format(day, "yyyy-MM-dd");
                    const isAvailable = availableDays.includes(formattedDay);

                    return (
                        <button
                            key={index}
                            className={`day-button ${isAvailable ? 'available' : 'unavailable'} ${selectedDay === day ? 'active' : ''}`}
                            onClick={() => isAvailable && handleDayClick(day)}
                        >
                            {format(day, "dd/MM")}
                        </button>
                    );
                })}
            </div>

            {selectedDay && (
                <div className="times-container">
                    <h3>Plages horaires pour {format(selectedDay, "dd-MM-yyyy")}</h3>
                    {availableTimes.map((time, index) => (
                        <button
                            key={index}
                            className={`time-button ${selectedTime === time ? 'active' : ''}`}
                            onClick={() => handleTimeClick(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            )}

            <button className="submit-button" onClick={handleSubmit}>
                Réserver
            </button>

            {/* Formulaire de confirmation */}
            {showForm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Confirmez votre rendez-vous</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Nom :
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Email :
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Téléphone :
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <button type="submit">Confirmer</button>
                            <button type="button" onClick={() => setShowForm(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Pop-up d'erreur */}
            {showErrorPopup && (
                <div className="modal-overlay">
                    <div className="modal error-modal">
                        <h2>Erreur</h2>
                        <p>{errorMessage}</p>
                        <button onClick={closeErrorPopup}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appointment;
