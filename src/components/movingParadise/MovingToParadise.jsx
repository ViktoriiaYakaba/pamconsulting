import ImageParadiseOneDesktop from '../../assets/section-3-1.png';
import ImageParadiseOneTablet from '../../assets/section-3-1-tablet.png';
import ImageParadiseOneMobile from '../../assets/section-3-1-mob.png';

import ImageParadiseTwoDesktop from '../../assets/section-3-2.png';
import ImageParadiseTwoTablet from '../../assets/section-3-2-tablet.png';
import ImageParadiseTwoMobile from '../../assets/section-3-2-mob.png';

import css from './MovingToParadise.module.css';

export const MovingToParadise = () => {
  return (
    <div className={css.container}>
      <div className={css.imageOne}>
          <picture>
            <source media="(min-width: 1158px)" srcSet={ImageParadiseOneDesktop} />
            <source media="(min-width: 768px)" srcSet={ImageParadiseOneTablet} />
            <img src={ImageParadiseOneMobile} alt="paradise" className={css.img} />
          </picture>
      </div>
      
      <div className={css.containerItem}>
        <h2 className={css.title}>MOVING TO PARADISE</h2>
              <p className={css.text}>Have you ever dreamed about the perfect place to live? Your definition of perfect may be different someone else’s. Are you longing to live by the beach and listen to the soothing waves or are you a kind of person who enjoys the bustling sounds of the city? Whatever lifestyle you desire, Cyprus has it all! Whether you’re travelling with your family, your partner, or as a solo business entrepreneur, this exotic island can offer you a little bit of everything. </p>
              <p className={css.text}>If you’ve made the decision to relocate to Cyprus, then you are expecting to find a safe place to settle. With extremely low crime rate, stunning sandy beaches, and awe-inspiring mountain views, Cyprus is the place to be!</p>
        <button type='button' className={css.btn}> Find Out More</button>
      </div>
      
     <div className={css.image}>
          <picture>
            <source media="(min-width: 1158px)" srcSet={ImageParadiseTwoDesktop} />
            <source media="(min-width: 768px)" srcSet={ImageParadiseTwoTablet} />
            <img src={ImageParadiseTwoMobile} alt="paradise" className={css.img} />
          </picture>
     </div>
    </div>
  );
};



