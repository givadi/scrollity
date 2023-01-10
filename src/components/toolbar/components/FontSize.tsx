import styles from '../../common/barIcon/BarIcon.module.css';
import font_size from '../../../assets/images/barIcons/font_size.svg';
import store from '../../../store/store';
import {ReactElement} from 'react';
import {TextBlockType, BlockType} from '../../../types/blocks';
import {Selection} from '../../../types/selectedSlides';
import {useDispatch} from 'react-redux';
// import {selectBlock, selectBlocks, } from '../../../store/actionCreators/selectedSlides';
import {selectBlock, selectBlocks, } from '../../../store/actions/selectedSlides';
import {changeFontSize} from '../../../store/actionCreators/slides';
import { getLastSelectedSlideId, getSelectedBlocks } from '../../../common/functions/slides';
import { number } from 'yargs';


const FontSize = () => {
  const dispatch = useDispatch();
  const selectedSlides = store.getState().selectedSlides;
 
// console.log("fontSize = ", fontSize);
    // const selectedSlides: Array<string> | Selection = store.getState().selectedSlides;
  //   if (!Array.isArray(selectedSlides)) {
  //     return selectedSlides.selectedBlocksId.includes(fontSize);
  // }
  return (
    <div className={styles.wrapper}>
    <form >
       <label>Font size: </label>
       <select  onChange = {(event) => { 
       console.log(event.target.value);
       const newFontSize = event.target.value;
        console.log('selected blocks',  getSelectedBlocks(selectedSlides, store.getState().slides));
          dispatch(changeFontSize(getLastSelectedSlideId(store.getState().selectedSlides), {
            ...selectedSlides,
            fontSize: CHANGE_FONT_SIZE,
          }))

        }}>
         <option value="12">12</option>
         <option value="18">18</option>
         <option value="32">32</option>
       </select>
        </form>

      
    </div>
);
}

const FontSizeSelected = () =>{

}


// const deFontSize = (props) => {


  
//   const setFont = {value: '18'};
  // const [newValue, setValue] = useState(element.value);
  // handleChange = this.handleChange.bind(this);
  // handleSubmit = this.handleSubmit.bind(this);


  //   handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  //   handleSubmit(event) {
  //     alert('Your favorite flavor is: ' + this.state.value);
  //     event.preventDefault();
  //   }

// render() {
//   return (
//     console.log(props.FontSize);
//    < SelectFontSize />
//   )
// }

export default FontSize;