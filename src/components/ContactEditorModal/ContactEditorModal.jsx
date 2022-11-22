import PropTypes from 'prop-types';
import { CloseButton } from 'components/Button/Button.styled';
import Modal from 'components/Modal';
import ModalForm from 'components/ModalForm';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import {
  useUpdateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';
import { showModalChange } from 'redux/modal/modalSlice';

const ContactEditorModal = ({ handleShowModal }) => {
  const [updateContact, { isLoading: isUpdaiting }] =
    useUpdateContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const dispatch = useDispatch();
  const handleUpdateContact = async fields => {
    try {
      dispatch(showModalChange());
      const name = fields.name;
      const number = fields.number;
      const contactsName = contacts.find(contact => contact.name === name);
      const contactsNumber = contacts.find(
        contact => contact.number === number
      );

      // const contact = { name, number };
      if (contactsName && contactsNumber) {
        Swal.fire({
          title: 'Error!',
          text: `Sorry, contact ${name} or number ${number} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }

      await updateContact(fields);
      toast.success('Contact edited successfully!');
    } catch (error) {
      toast.error('Something went wrong. Please, try again.');
    }
  };
  return (
    <>
      <Modal onClose={handleShowModal}>
        <CloseButton onClick={handleShowModal}>
          <AiOutlineCloseCircle size={20} />
        </CloseButton>
        <ModalForm onSubmit={handleUpdateContact} isUpdaiting={isUpdaiting} />
      </Modal>
    </>
  );
};
ContactEditorModal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default ContactEditorModal;
