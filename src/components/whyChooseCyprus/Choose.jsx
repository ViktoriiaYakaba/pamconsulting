import Icon1 from '../../assets/choose-1.svg';
import Icon2 from '../../assets/choose-2.svg';
import Icon3 from '../../assets/choose-3.svg';
import Icon4 from '../../assets/choose-4.svg';
import css from './Choose.module.css'

export const Choose = () => {
  return (
      <div className={css.container}>
      <h2 className={css.title}>Why Choose Cyprus?</h2>
      <p className={css.text}>When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination. This small Mediterranean mesmerizes millions of visitors every year.</p>
      <ul className={css.list}>
        <li className={css.listItem}>
         <img src={Icon1} alt="money" className={css.svg} />
                  <h5 className={css.titleItem}>Progressive tax system</h5>
                  <p className={css.textItem}>Offering one of the most attractive tax regimes in Europe</p>
        </li>
        <li className={css.listItem}>
          <img src={Icon2} alt="sun" className={css.svg} />
                  <h5 className={css.titleItem}>Stunning weather and climate</h5>
                  <p className={css.textItem}>Enjoy a high quality of life with over 324 days of sun annually</p>
        </li>
        <li className={css.listItem}>
           <img src={Icon3} alt="people" className={css.svg} />
                  <h5 className={css.titleItem}>Blooming expat community</h5>
                  <p className={css.textItem}>Become part of an increasingly diverse community</p>
        </li>
        <li className={css.listItem}>
                  <img src={Icon4} alt="home" className={css.svg} />
                  <h5 className={css.titleItem}>Family-oriented values</h5>
                    <p className={css.textItem}>Excellent education standards and extremely low crime rates</p>
        </li>
      </ul>
    </div>
  );
};

