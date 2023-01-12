import styles from '../../common/barIcon/BarIcon.module.css';
import template from '../../../assets/images/barIcons/template.png';
import {Presentation} from '../../../types/presentation';
import store from '../../../store/store';

function getData(): Presentation {
    return {
        name: store.getState().name,
        slides: store.getState().slides,
        selectedSlides: store.getState().selectedSlides
    }
}

const handleSave = () => {
    const presentation: Presentation = getData();
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,'
        + encodeURIComponent(JSON.stringify({ ...presentation, selectedSlides: {}}, null, 2)));
    element.setAttribute('download', presentation.name + '.json');
    element.click();
};

function Template() {
    return (
        <div className={styles.container} onClick={handleSave} >
            <img className={styles.template} src={template} alt='Save presentation' />
            <span className={styles.text}>Save file</span>
        </div>
    )
}

export default Template;