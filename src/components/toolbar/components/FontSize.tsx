import styles from '../../common/barIcon/BarIcon.module.css';
import font_size from '../../../assets/images/barIcons/font_size.svg';
import {Presentation, FigureType, ImageBlockType, BlockType, Slide, SlideBackground, TextBlockType} from '../../../data/types';
import {getState} from '../../../data/testData_v2';



// установть среднйи шрифт выбранным
// применени выбранного шрифта



// отрисовать селект шрифтов
const FontSize = (props) => {
  // console.log("fontSize = ", {block1.fontSize});
  return (
    <div className={styles.wrapper}>
      <form >
      <label>Font size:</label>
      <select>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="32">32</option>
      </select>
      <img className={styles.icon} src={font_size} alt='Font Size' />
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