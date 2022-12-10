// import selectedBlock from '../../common/barIcon/BarIcon.module.css';
import styles from './Bold.module.css';
import bold from '../../../assets/images/barIcons/bold.svg';
import {Slide} from '../../../data/types';
import {Selection} from '../../../data/types';
import {useState} from 'react';
import React from 'react';

type selectedProps = {
  slide: Slide,
  Selection: Selection
}

const Bold = () => {

  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={bold} alt='Bold' />
    </div>

  );
}


export default function makeBlockSelected (props: selectedProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return(
    <div className={isActive ? 'selectedBlock' : ''} onClick={handleClick}>
  </div>
);

}




// export default Bold;