import Image from 'next/image';
import styles from './page.module.scss';
import buttonStyle from '@/_components/button.module.scss';
import InputComponent from '@/_components/input.component';
export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      <div className='relative flex place-items-center flex-1'></div>

      <div className={styles.formWrapper}>
        <div className={styles.leaf} />

        <div className={styles.formTitle}>Welcome Back!</div>
        <div className={styles.formInfo}>
          Enter your account information
        </div>

        <InputComponent type='email' icon='envelope' />
        <InputComponent type='password' has-toggler icon='lock' />
        <button
          type='button'
          className={buttonStyle.button + ' ' + buttonStyle.primary}
        >
          Login{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
