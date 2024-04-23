import PropTypes from 'prop-types';
import Modal from 'react-modal';
import modalSities from '../modalSities.json';
import css from './ModalSities.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '480px',
     height: '550px',
    backgroundColor: '#fff',
    margin: 'auto',
    borderRadius: '10px',
  }
};
  

const ModalSities = ({ isModalOpen, closeModal, id }) => {
  const city = modalSities.find(city => city.id === id);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.container}>
        <div className={css.containerItem}>
          <img src={city.img1} alt={city.alt} className={ css.img} />
          <img src={city.img2} alt={city.alt} className={css.img} />
          <img src={city.img3} alt={city.alt} className={css.img} />
        </div>
        <h3 className={css.title}>{city.title}</h3>
        <p className={css.text}>{city.text}</p>
      </div>
    </Modal>
  );
}

ModalSities.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalSities;




