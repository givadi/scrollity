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


const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      Toolbar
      <TextBlock />
      <InsertPicture />
      <Triangle />
      <Circle />
      <Rectangle />
      <FontFamily />
      <FontSize />
      <Bold />
      <Italic />
      <OrderFront />
      <OrderBack />
    </div>
  );
}

export default Toolbar;
