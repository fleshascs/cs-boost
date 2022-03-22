import clsx from 'clsx';
import Image from './Image';
import styles from './downloadButtons.module.css';
import { useEffect, useRef } from 'react';
interface ButtonsProps {
  className?: string;
}
const Buttons = ({ className }: ButtonsProps) => {
  const directBtn = useRef(null);
  const torrentBtn = useRef(null);

  useEffect(() => {
    //can't just use react onClick={log}, it doesn't work on firefox
    directBtn.current.addEventListener('click', log);
    torrentBtn.current.addEventListener('click', log);
    function log() {
      fetch('https://fleshas.lt/php/api/csdownloads/');
    }
    return () => {
      directBtn.current.removeEventListener('click', log);
      torrentBtn.current.removeEventListener('click', log);
    };
  }, []);

  return (
    <div className={clsx(styles.dbcontainer, className, 'p-3')}>
      <a
        // href='https://fleshas.lt/cs-download/Counter-Strike1.6.exe'
        href='http://dl.fleshas.lt/cs/cstrike.exe'
        ref={directBtn}
        className={clsx(styles.downloadbutton, 'mr-3')}
      >
        <Image
          className={styles.dbicon}
          width='40'
          height='40'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?resize&size=40&format=webp')}
          alt='CS 1.6 Download'
          title='Counter-Strike 1.6'
        />

        <div>
          <div className={styles.dbtop}>DOWNLOAD</div>
          <div className={styles.dbbottom}>Direct link</div>
        </div>
      </a>
      <a
        // href='https://fleshas.lt/cs-download/Counter-Strike 1.6.exe.torrent'
        href='http://dl.fleshas.lt/cs/cstrike.exe.torrent'
        className={styles.downloadbutton}
        ref={torrentBtn}
      >
        <Image
          className={styles.dbicon}
          width='40'
          height='40'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?resize&size=40&format=webp')}
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
