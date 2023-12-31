import Image from 'next/image';
import styles from './input.module.scss';
import Envelope from '/public/icons/envelope.svg';
import Lock from '/public/icons/lock.svg';
import EnvelopeIcon from '@/_icons/envelope.icon';
import LockIcon from '@/_icons/lock.icon';
import EyeSlashIcon from '@/_icons/eye-slash.icon';

type Props = {
  type: 'email' | 'password' | 'text';
  icon?: 'envelope' | 'lock';
  'has-toggler'?: boolean;
};
export default function InputComponent({ type, ...p }: Props) {
  return (
    <div>
      <div className={styles.wrapper}>
        {p.icon && (
          <div className={styles.icon}>
            {type === 'email' && <EnvelopeIcon />}
            {type === 'password' && <LockIcon />}
          </div>
        )}
        <input
          type='email'
          name='email'
          id='email'
          className={styles.input}
          placeholder='you@example.com'
        />
        {p['has-toggler'] && (
          <div className={styles.icon + ' ' + styles.toggler}>
            <EyeSlashIcon />
          </div>
        )}
      </div>
    </div>
  );
}
