import { useState } from 'react';
import css from './PopularSities.module.css';
import ModalSities from './ModalSities';
import modalSities from '../modalSities.json';

export const PopularSities = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCityClick = (cityName) => {
    const city = modalSities.find(city => city.title === cityName);
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Most popular cities</h4>
      <ul className={css.list}>
        <li className={css.listItem} onClick={() => handleCityClick("Nicosia")}>
          <img src="/src/assets/nicosia-min.png" alt="Nicoscia" />
          <p>Nicosia</p>
        </li>
        <li className={css.listItem} onClick={() => handleCityClick("Limassol")} >
          <img src="/src/assets/limassol-min.png" alt="Limassol" />
          <p>Limassol</p>
        </li>
        <li className={css.listItem} onClick={() => handleCityClick("Paphos")}>
          <img src="/src/assets/paphos-min.png" alt="Paphos" />
          <p>Paphos</p>
        </li>
        <li className={css.listItem} onClick={() => handleCityClick("Larnaka")}>
          <img src="/src/assets/larnaka-min.png" alt="Larnaka" />
          <p>Larnaka</p>
        </li>
      </ul>
      {isModalOpen && selectedCity && (
        <ModalSities
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          id={selectedCity.id}
          img1={selectedCity.img1}
          img2={selectedCity.img2}
          img3={selectedCity.img3}
          alt={selectedCity.alt}
          title={selectedCity.title}
          text={selectedCity.text}
        />
      )}
    </div>
  );
}


