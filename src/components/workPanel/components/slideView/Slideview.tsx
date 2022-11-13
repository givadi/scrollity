import styles from './Slideview.module.css';
import { SlideViewItem } from './components/slideViewItem/SlideViewItem';

const Slideview = () => {
  return (
    <div className={styles.slideView}>
      Slideview
      <SlideViewItem />
    </div>
  );
}

export default Slideview;
