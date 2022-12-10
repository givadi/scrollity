import styles from '../../common/barIcon/BarIcon.module.css';
import add from '../../../assets/images/barIcons/add.svg';
import {dispatch} from '../../../data/testData_v2';
import {useDispatch, useSelector} from "react-redux";
import {Presentation} from "../../../data/types";
import {addSlide} from "../../../store/reducers/presentationReducer";
import store from "../../../store/store";

function AddNewSlide() {
    const dispatch = useDispatch();
    let test = store.getState();
    console.log(test);

    return (
        <div className={styles.wrapper} onClick={() => {
            dispatch(addSlide())
            let test = store.getState();
            console.log(test);
        }}>
            <img className={styles.icon} src={add} alt='Add new slide'/>
        </div>
    );
}

export default AddNewSlide;
