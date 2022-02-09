import { useState } from 'react';
import styles from './styles.module.css';

export const ContactModal = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={styles.main}>
      <form>
        <input required onChange={t => setName(t.target.value)} placeholder="Name" value={name} />
        <input
          required
          onChange={t => setPhone(t.target.value)}
          placeholder="Phone Number"
          value={phone}
        />
        <input
          required
          onChange={t => setEmail(t.target.value)}
          placeholder="Email Address"
          value={email}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
