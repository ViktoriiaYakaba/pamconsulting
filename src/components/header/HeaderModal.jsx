import Modal from 'react-modal';
import PropTypes from 'prop-types';

const HeaderModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{}}
    >
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/investing">Invest in Cyprus</a></li>
          <li><a href="/contact">Contact Us</a></li>
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
