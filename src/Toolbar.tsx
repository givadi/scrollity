import styles from './Toolbar.module.css';
import TextBlock from './components/toolbar/TextBlock';
import InsertPicture from './components/toolbar/InsertPicture';
import Triangle from './components/toolbar/Triangle';
import Circle from './components/toolbar/Circle';
import Rectangle from './components/toolbar/Rectangle';
import FontFamily from './components/toolbar/FontFamily';
import FontSize from './components/toolbar/FontSize';
import Bold from './components/toolbar/Bold';
import Italic from './components/toolbar/Italic';
import OrderFront from './components/toolbar/OrderFront';
import OrderBack from './components/toolbar/OrderBack';


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
