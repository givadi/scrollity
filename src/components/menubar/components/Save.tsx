import styles from '../../common/barIcon/BarIcon.module.css';
import save_as from '../../../assets/images/barIcons/save_as.svg';
import App from '../../../App';
import { getData } from '../../../data/testData_v2';
import { useState, useEffect, useRef } from "react";
import {Presentation} from "../../../data/types";



// const fs = require('fs');

// const Save = (App, file) =>{
//   const finished = (error) =>{
//     if (error){
//       console.error(error);
//       return;
//     }
//     else 
//       return (
//     <div className={styles.wrapper}>
//       <img className={styles.icon} src={save_as} alt='Save' />
//     </div>
//       )
//   }

//   const jsonData = JSON.stringify(App, null, 2);
//   fs.writefile(file, jsonData, finished);

//   console.log(App);
//   console.log(jsonData);
// }

// Save(App, 'presentation.json');




function Save(filename, text) {
  const jsonData = JSON.stringify(App, null, 2);
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  console.log(jsonData);
  
return (
   <div className={styles.wrapper}>
     <img className={styles.icon} src={save_as} alt='Save presentation' onClick={Save} />
     <input className = {styles.hidden} type="file"/>
    </div>
)
}






// const Save = () => {

  
//   // преобразовываем объект в строку и сохраняем в localStorage
//   localStorage.setItem('App', JSON.stringify(App));

// // useEffect(() => {
// //   localStorage.setItem("Presentat", JSON.stringify(App));
// // }, [App]);
//   return (
//     <div className={styles.wrapper}>
//       <img className={styles.icon} src={save_as} alt='Save' />
//     </div>
//   );


// }

export default Save;