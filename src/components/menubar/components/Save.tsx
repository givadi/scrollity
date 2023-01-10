import styles from '../../common/barIcon/BarIcon.module.css';
import save_as from '../../../assets/images/barIcons/save_as.svg';
import { getState } from '../../../data/testData_v2';
import store from '../../../store/store';

const handleSave = () => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(store.getState().slides, null, 2)));
  element.setAttribute('download', store.getState().name);
  element.click();
};

function Save() {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={save_as} alt='Save presentation' onClick={handleSave} />
        <span className={styles.text}>Save file</span>
      </div>
  )
}

export default Save;