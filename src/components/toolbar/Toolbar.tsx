import styles from './Toolbar.module.css';
import TextBlock from './components/TextBlock';
import InsertPicture from './components/InsertPicture';
import Triangle from './components/Triangle';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';
import FontFamily from './components/FontFamily';
import FontSize from './components/FontSize';
import Bold from './components/Bold';
import Italic from './components/Italic';
import OrderFront from './components/OrderFront';
import OrderBack from './components/OrderBack';
import AddNewSlide from '../menubar/components/AddNewSlide';
import DeleteSlide from '../menubar/components/DeleteSlide';
import Undo from '../menubar/components/Undo';
import Redo from '../menubar/components/Redo';

function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <div className={styles.section}>
                <div className={styles.icons}>
                    <AddNewSlide/>
                    <DeleteSlide/>
                    <Undo/>
                    <Redo/>
                </div>
                <span className={styles.description}>Slide</span>
            </div>
            <div className={styles.section}>
                <div className={styles.icons}>
                    <TextBlock/>
                    <InsertPicture/>
                    <Triangle/>
                    <Circle/>
                    <Rectangle/>
                </div>
                <span className={styles.description}>Insert</span>
            </div>
            <div className={styles.section}>
                <div className={styles.icons}>
                    <FontFamily/>
                    <FontSize/>
                    <Bold/>
                    <Italic/>
                </div>
                <span className={styles.description}>Font style</span>
            </div>
            <div className={styles.section}>
                <div className={styles.icons}>
                    <OrderFront/>
                    <OrderBack/>
                </div>
                <span className={styles.description}>Order</span>
            </div>
        </div>
    );
}

export default Toolbar;
