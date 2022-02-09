import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const ContactModal = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      !!name &&
        !!phone &&
        !!email &&
        /^[0-9]{5}-[0-9]{4}$/.test(phone) &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
    );
  }, [name, phone, email]);

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

        <button disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
};
