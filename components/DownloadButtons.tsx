import clsx from 'clsx';
import Image from './Image';
import styles from './downloadButtons.module.css';
import { useEffect } from 'react';

interface ButtonsProps {
  className?: string;
}
const Buttons = ({ className }: ButtonsProps) => {
  // useEffect(() => {
  //   const buttons = document.querySelectorAll('.js-log-click');
  //   [].map.call(buttons, (button) => {
  //     button.addEventListener('click', () => log());
  //   });

  //   function log() {
  //     fetch('https://fleshas.lt/php/api/csdownloads/').catch((error) => {
  //       //...
  //     });
  //   }
  // }, []);

  function log() {
    fetch('https://fleshas.lt/php/api/csdownloads/').catch((error) => {
      //...
    });
  }

  return (
    <div className={clsx(styles.dbcontainer, className, 'py-3')}>
      <a
        href='https://fleshas.lt/cs-download/Counter-Strike1.6.exe'
        onClick={log}
        className={clsx(styles.downloadbutton, 'mr-1')}
      >
        <Image
          className={styles.dbicon}
          width='40'
          height='40'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?webp&resize&size=40')}
          alt='CS 1.6 Download'
          title='Counter-Strike 1.6'
        />

        <div>
          <div className={styles.dbtop}>DOWNLOAD</div>
          <div className={styles.dbbottom}>Direct link</div>
        </div>
      </a>
      <a
        href='https://fleshas.lt/cs-download/Counter-Strike 1.6.exe.torrent'
        className={clsx(styles.downloadbutton, 'mr-1')}
        onClick={log}
      >
        <Image
          className={styles.dbicon}
          width='40'
          height='40'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?webp&resize&size=40')}
          alt='CS 1.6 Download Torrent'
          title='Counter-Strike 1.6 Torrent'
        />
        <div>
          <div className={styles.dbtop}>DOWNLOAD</div>
          <div className={styles.dbbottom}>Torrent</div>
        </div>
      </a>
    </div>
  );
};

export default Buttons;
