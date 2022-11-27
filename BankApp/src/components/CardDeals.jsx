import { card } from "../assets";
import styles, { layout } from '../styles';
import Button from "./Button";

const CardDeals = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h1 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h1>
        <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. 
        Mauris eu adipiscing ultrices ametodio 
        aenean neque. Fusce ipsum orci rhoncus 
        aliporttitor integer platea placerat.
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className="w-[100%] h-[100%]
        relative z-[5]"/>
      </div>
    </section>
  )


export default CardDeals;