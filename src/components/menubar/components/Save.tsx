import styles from '../../common/barIcon/BarIcon.module.css';
import save_as from '../../../assets/images/barIcons/save_as.svg';
import { getData } from '../../../data/testData_v2';

const handleSave = () => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(getData(), null, 2)));
  element.setAttribute('download', 'name' + '.json');
  element.click();
};

function Save() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={save_as} alt='Save presentation' onClick={handleSave} />
      </div>
  )
}

export default Save;