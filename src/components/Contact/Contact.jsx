
// import React from 'react';
// import styles from './Contact.module.css';

// const Contact = ({ contact, onDelete }) => {
//   return (
//     <li className={styles.item}>
//       <div className={styles.info}>
//         <div className={styles.name}>
//           <span>👤</span>
//           <span>{contact.name}</span>
//         </div>
//         <div className={styles.number}>
//           <span>📞</span>
//           <span>{contact.number}</span>
//         </div>
//       </div>
//        <button onClick={() => onDelete(contact.id)} className={styles.deleteButton}>
//         Delete
//       </button>
//     </li>
//   );
// };

// export default Contact;

import React from 'react';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.name}>
          <span>👤</span>
          <span>{contact.name}</span>
        </div>
        <div className={styles.number}>
          <span>📞</span>
          <span>{contact.number}</span>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;



