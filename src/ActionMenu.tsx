import styles from './ActionMenu.module.css';
import Open from './components/actionMenu/Open';
import Save from './components/actionMenu/Save';
import View from './components/actionMenu/View';
import AddNewSlide from './components/actionMenu/AddNewSlide';
import DeleteSlide from './components/actionMenu/DeleteSlide';
import Undo from './components/actionMenu/Undo';
import Redo from './components/actionMenu/Redo';


const ActionMenu = () => {
  return (
    <div className={styles.actionMenu}>
      Action
      <Open />
      <Save />
      <View />
      <AddNewSlide />
      <DeleteSlide />
      <Undo />
      <Redo />
    </div>
  );
}

export default ActionMenu;
