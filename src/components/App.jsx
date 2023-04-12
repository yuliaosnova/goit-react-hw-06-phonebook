import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
// import css from './App.module.css';
import { Layout } from './Layout/Layout';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';


export default function App() {
	const [showModal, setShowModal] = useState(false);
	const contacts = useSelector(state => state.contacts);
	
	
	const toggleModal = () => {
		setShowModal(() => !showModal);
	 };
  return (
    <>
	 <Layout toggleModal={toggleModal} />
	 {showModal && (
        <Modal onClose={toggleModal}>
          <Form />
        </Modal>
      )}
      
      

      
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
