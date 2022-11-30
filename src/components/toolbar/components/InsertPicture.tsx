import styles from '../../common/barIcon/BarIcon.module.css';
import insert_picture from '../../../assets/images/barIcons/insert_picture.svg';
import { useState, useRef } from 'react';

const InsertPicture = () => {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

const hostUrl = '/upload';

  const handleChange = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0])
  };


          const handleUpload = async () => {
            if (!selectedFile) {
              alert("Please select a file");
              return;
            };
          const formData = new FormData();
          formData.append('file', selectedFile );

          const res = await fetch(hostUrl, {
            method: 'POST',
            body: formData,
          });
          const data = await res.json();

setUploaded(data);

          };

          const onInsertPicture = (e) => {
           if (e.target.files[0]) {

           }
          }


const handlePick = () => {
  filePicker.current.click()
}

return (
   <div className={styles.wrapper}>
     <img className={styles.icon} src={insert_picture} alt='Insert_picture' onClick={handlePick} />
     <input className = {styles.hidden} type="file" ref={filePicker}  onChange = {handleChange} accept="image/*, .png, .jpg, .jpeg"/>
    </div>


)
}


export default InsertPicture;