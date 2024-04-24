import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import Modal from 'react-modal';
import css from './HeaderModal.module.css';

const customStyles = {
   overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    width: '100%', 
    backgroundColor: 'white', 
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
    borderLeft: '1px solid #ccc',
  }
};

const HeaderModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Menu"
      style={customStyles}
    >
      <div className={css.container}>
        <button type='button' onClick={closeModal} className={css.btn}><IoClose className={css.icon} /></button>
        <ul className={css.list}>
          <li ><Link to="/" className={css.listItem}>Home</Link></li>
          <li ><Link to="/about" className={css.listItem}>About Us</Link></li>
          <li ><Link to="/services" className={css.listItem}>Services</Link></li>
          <li ><Link to="/investing" className={css.listItem}>Invest in Cyprus</Link></li>
          <li ><Link to="/contact" className={css.listItem}>Contact Us</Link></li>
        </ul>
      </div>
    </Modal>
  );
}

HeaderModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default HeaderModal;

