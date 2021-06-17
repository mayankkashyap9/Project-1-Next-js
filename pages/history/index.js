import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../../styles/history.module.css'
import Hist from './Hist'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 1000, min: 824 },
    items: 1
  }

};
function History(){
  return(
    <>
    <Carousel className={styles.card_style} responsive={responsive}>
        <Hist imgscr="/pexels-photo-3326362.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-374101.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-2294353.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)"  provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-3094230.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-3823039.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-3822140.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Hist imgscr="/pexels-photo-3822166.webp" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul kumar" date="22 Dec 2020-"/>
    </Carousel>
    </>

  )
}
export default History;
