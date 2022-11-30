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



// localStorage.setItem("Presentation", JSON.stringify(App));


const Save = () => {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();


const handlePick = () => {
  filePicker.current.click();
}

return (
   <div className={styles.wrapper}>
     <img className={styles.icon} src={save_as} alt='Insert_picture' onClick={handlePick} />
     <input className = {styles.hidden} type="file" ref={filePicker} accept="image/*, .png, .jpg, .jpeg"/>
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