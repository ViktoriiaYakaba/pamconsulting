import css from './OurServises.module.css';
import familyImage from '../../assets/servises-1-desk.png';
import bussinessimge from '../../assets/servises-2-desk.png';
import investimentImage from '../../assets/servises-3-des.png';

export const OurServises = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Our Services</h2>
            <ul className={css.list}>
                <li className={css.listItem}>
                    <img src={familyImage} alt='family' className={ css.img}/>
                    <h2 className={css.titleList}>FAMILY RELOCATION</h2>
                    <p className={css.text}>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>
                    <button type='button' className={css.btn}>Find out more</button>
                </li>
                <li className={css.listItem}>
                    <img src={bussinessimge} alt="bussines" className={ css.img}/>
                    <h2 className={css.titleList}>Business Relocation</h2>
                    <p className={css.text}>We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.</p>
                    <button type='button' className={css.btn}>Find out more</button>
                </li>
                <li className={css.listItem}>
                    <img src={investimentImage} alt="investiment" className={ css.img} />
                    <h2 className={css.titleList}>Investment plans</h2>
                    <p className={css.text}>Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.</p>
                    <button type='button' className={css.btn}>Find out more</button>
                </li>
            </ul>
       </div>
    )
}
