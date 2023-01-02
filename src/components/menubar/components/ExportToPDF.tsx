import styles from '../../common/barIcon/BarIcon.module.css';
import export_to_pdf from '../../../assets/images/barIcons/export_to_pdf.svg';
import { jsPDF } from "jspdf";
import { getState } from '../../../data/testData_v2';
import {Presentation, FigureType, ImageBlockType, BlockType, Slide, SlideBackground, TextBlockType} from '../../../data/types';
import App from '../../../../src/App';
import { Canvas } from '../../workPanel/components/canvas/Canvas';



type ExportProps = {
  slide: Slide,
}

function getBackgroundPdf(slide: Slide): string {
  if (slide.background.type === 'image') {
      return 'url(' + slide.background.data + ') no-repeat center/100% 100% #fff';
  }
  else if (slide.background.type === 'color') {
      return slide.background.data;
  }

  return '#fff';
}
// const pdfPageColor: string = getBackgroundPdf(props: ExportProps);

const ExportToPDF = () => {

  
  const pdf = new jsPDF({
    orientation: 'l',
    format: [960, 540],
    unit: 'px',
    putOnlyUsedFonts: true,
  })

  // pdf.setFillColor(slide.background);

// if (slide.background.data !== "") {
//   const pdfPageColor: string = getBackgroundData(slide);
//       pdf.setFillColor(pdfPageColor)
// }


  const handleExport = () => {
    pdf.save("presentation_name.pdf");
  };



return (
  <div className={styles.wrapper}>
    <img className={styles.icon} src={export_to_pdf} alt='export to pdf' onClick={handleExport}  />
  </div>
);
}

// function renderSlide(pdf: jsPDF, slide: Slide) {
  // if (index !== 0) {
  //     pdf.addPage()
  // }


export default ExportToPDF;



