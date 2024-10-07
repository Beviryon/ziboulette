import { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Julie Martin",
        review: "Super expérience ! Le personnel est très professionnel et mes ongles sont magnifiques.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        date: "2023-10-01"
    },
    {
        id: 2,
        name: "Sophie Durand",
        review: "J'ai adoré l'accueil et la qualité du service. Je reviendrai sans hésitation !",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        date: "2023-09-15"
    },
    {
        id: 3,
        name: "Claire Dupont",
        review: "Très bon service, je suis ravie de mes nouveaux ongles. Merci beaucoup !",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        date: "2023-09-25"
    },
    {
        id: 3,
        name: "Claire Dupont",
        review: "Très bon service, je suis ravie de mes nouveaux ongles. Merci beaucoup !",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        date: "2023-09-25"
    }
];

const Testimonials = () => {
    const [sortedTestimonials, setSortedTestimonials] = useState(testimonialsData);
    const [isSortedByNewest, setIsSortedByNewest] = useState(true);

    const sortTestimonials = (byNewest) => {
        const sorted = [...testimonialsData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return byNewest ? dateB - dateA : dateA - dateB;
        });
        setSortedTestimonials(sorted);
        setIsSortedByNewest(byNewest);
    };

    return (
        <div className="testimonials-container">
            <h2>Ce que disent nos clients</h2>

            <div className="sort-buttons">
                <button 
                    className={`sort-button ${isSortedByNewest ? 'active' : ''}`}
                    onClick={() => sortTestimonials(true)}
                >
                    Voir les plus récents
                </button>
                <button 
                    className={`sort-button ${!isSortedByNewest ? 'active' : ''}`}
                    onClick={() => sortTestimonials(false)}
                >
                    Voir les plus anciens
                </button>
            </div>

            <div className="testimonials-list">
                {sortedTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="testimonial-avatar"
                        />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.review}</p>
                        <div className="testimonial-rating">
                            {Array(testimonial.rating).fill("⭐").map((star, index) => (
                                <span key={index}>{star}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
