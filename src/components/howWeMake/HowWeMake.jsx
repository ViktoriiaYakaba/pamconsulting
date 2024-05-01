import Icon1 from '../../assets/listen.svg';
import Icon2 from '../../assets/strategize.svg';
import Icon3 from '../../assets/provide.svg';
import Icon4 from '../../assets/manage.svg';
import css from './HowWeMake.module.css'

export const HowWeMake = () => {
  return (
      <div className={css.container}>
      <h2 className={css.title}>How we make it happen</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
         <img src={Icon1} alt="listen" className={css.svg} />
                  <h5 className={css.titleItem}>We listen</h5>
                  <p className={css.textItem}>Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions.</p>
        </li>
        <li className={css.listItem}>
          <img src={Icon2} alt="strategize" className={css.svg} />
                  <h5 className={css.titleItem}>We strategize</h5>
                  <p className={css.textItem}>According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth as possible.</p>
        </li>
        <li className={css.listItem}>
           <img src={Icon3} alt="provide" className={css.svg} />
                  <h5 className={css.titleItem}>We provide</h5>
                  <p className={css.textItem}>We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions.</p>
        </li>
        <li className={css.listItem}>
                  <img src={Icon4} alt="manage" className={css.svg} />
                  <h5 className={css.titleItem}>We manage</h5>
                    <p className={css.textItem}>Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services.</p>
        </li>
      </ul>
    </div>
  )
}


