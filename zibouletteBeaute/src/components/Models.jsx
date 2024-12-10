import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Models.css";

// Exemple de données pour les modèles phares (carrousel)
const modelesPhare = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/474x/0f/27/4d/0f274d0d942dd9fad2e670cf41597641.jpg", alt:"modèle ziboulette",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/enabled_hi/736x/01/79/87/0179870416c01201d13c43b897ad5874.jpg", alt:"modèle ziboulette",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/enabled_hi/474x/56/a6/75/56a6758628a5c3e321fc821929dcb561.jpg", alt:"modèle ziboulette",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/enabled_hi/474x/bb/95/4c/bb954cae607c8fb9d6742144463eaff7.jpg", alt:" modèle ziboulette",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:"modèle ziboulette",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
];

// Exemple de données pour les modèles
const modelesData = [
  {
    id: 1,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Classique",
    price: "50€",
    image:
      "https://i.pinimg.com/474x/0f/27/4d/0f274d0d942dd9fad2e670cf41597641.jpg", alt:"modèle ziboulette",
  },
  {
    id: 2,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Moderne",
    price: "60€",
    image:
      "https://i.pinimg.com/enabled_hi/736x/01/79/87/0179870416c01201d13c43b897ad5874.jpg", alt:"modèle ziboulette",
  },
  {
    id: 3,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Élégant",
    price: "70€",
    image:
      "https://i.pinimg.com/enabled_hi/474x/56/a6/75/56a6758628a5c3e321fc821929dcb561.jpg", alt:" modèle ziboulette",
  },
  {
    id: 4,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Glamour",
    price: "55€",
    image:
      "https://i.pinimg.com/enabled_hi/474x/bb/95/4c/bb954cae607c8fb9d6742144463eaff7.jpg", alt:" modèle ziboulette",
  },
  {
    id: 5,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "50€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
  {
    id: 6,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "10€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
  {
    id: 7,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "90€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
  {
    id: 8,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "59€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
  {
    id: 9,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "81€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
  {
    id: 10,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "25€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg ", alt:" modèle ziboulette",
  },
  {
    id: 11,
    name: "GLITTER FLOWERS COCKTAIL 5GR",
    category: "Extravagant",
    price: "35€",
    image:
      "https://i.pinimg.com/474x/0f/19/17/0f1917960866998cbd78e162ff4c13ca.jpg", alt:" modèle ziboulette",
  },
];

// Catégories disponibles
const categories = [
  "Toutes",
  "Classique",
  "Moderne",
  "Élégant",
  "Glamour",
  "Extravagant",
];

const ModelesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); 
  const itemsPerPage = 8;

  const filteredModeles = modelesData.filter(
    (modele) =>
      (selectedCategory === "Toutes" || modele.category === selectedCategory) &&
      modele.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredModeles.length / itemsPerPage);
  const displayedModeles = filteredModeles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    setCurrentPage(1); 
  }, [selectedCategory, searchTerm]);

  // Paramètres pour le carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="modeles-page-container">
      <div className="featured-models-carousel">
        <h2 className="phares">Modèles ziboulettes phares</h2>
        <p className="paragraphe-1">
          Chez Nails-Ziboulette, nous transformons vos ongles en véritables
          œuvres d'art. Notre spécialité? Des manucures et des pédicures qui
          reflètent votre style unique et votre personnalité.
        </p>
        <Slider {...settings}>
          {modelesPhare.map((modele) => (
            <div key={modele.id} className="carousel-item">
              <div className="carousel-image-wrapper">
                <img
                  src={modele.image}
                  alt={`Modèle phare ${modele.id}`}
                  className="carousel-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <header className="hero-section">
        <h1 className="titre">Nos Modèles ziboulette de Beauté</h1>
        <p>
          Découvrez notre sélection ziboulette exclusive de modèles pour
          sublimer votre look.
        </p>
        <input
          type="text"
          placeholder="Rechercher un modèle ziboulette..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>

      <div className="categories-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="modeles-grid">
        {displayedModeles.map((modele) => (
          <div key={modele.id} className="modele-card">
            <img
              src={modele.image}
              alt={modele.name}
              className="modele-image"
              onClick={() => openModal(modele.image)} 
            />
            <div className="modele-details">
              <h3>{modele.name}</h3>
              <p className="modele-price">{modele.price}</p>

              <Link className="reserve-button" to="/Appointment">
                Réserver
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Aperçu du modèle ziboulette" />
          </div>
        </div>
      )}

      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a nemo
          ea, fugiat est atque et debitis doloribus incidunt adipisci dicta,
          quam aspernatur natus hic fuga optio voluptatibus velit non.
        </p>
      </section>

       {/* Pied de page modernisé */}
       <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>À propos de nous</h3>
            <p>
              Nails-Ziboulette est votre destination pour des ongles parfaits.
              Nous offrons une variété de services de manucure et de pédicure
              pour répondre à tous vos besoins.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Liens utiles</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contactez-nous</h3>
            <p>Email: contact@nails-ziboulette.com</p>
            <p>Téléphone: +33 1 00 00 00 00</p>
            <p>Adresse: 123 Rue de la Beauté, 75000 Paris</p>
          </div>
          <div className="footer-section social">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nails-Ziboulette. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModelesPage;
