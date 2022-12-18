// import selectedBlock from '../../common/barIcon/BarIcon.module.css';
import bold from '../../../assets/images/barIcons/bold.svg';
import styles from '../../common/barIcon/BarIcon.module.css';

import {Slide} from '../../../data/types';
import {TextBlockType} from '../../../data/types';
import {Selection} from '../../../data/types';
import {useState} from 'react';
import React from 'react';
import { ChainExpression } from 'estree';



type selectedProps = {
  slide: Slide,
  Selection: Selection,
  fontWeight: TextBlockType,
}



const Bold = () => {
//   return (
//     <div className={styles.wrapper}>
//       <img className={styles.icon} src={bold} alt='Bold' />
//     </div>

//   );
// }



// const handleClick = (props: selectedProps) => {
//   // const textBlockStyles = {
//   //   fontWeight: props.fontWeight
//   // }
//   isBold(current => !current);
//   // if (textBlockStyles == "normal")
// };

// function Bold(props: selectedProps) {


  const boldStyle = useState(false);

  const setBold = (event) => {
    // setBold(event.target);
    console.log("bold button clicked");
    
  };


  return (
    <div className={styles.wrapper}>
      
      <img className={styles.icon} src={bold} alt='Bold' onClick={() => setBold(!boldStyle)} />
       <div > 
  </div></div>
  )
}



 export default Bold;