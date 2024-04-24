import css from './OurServises.module.css';


export const OurServises = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Our Services</h2>
            <ul className={css.list}>
                <li className={css.listItem}>
                    <img src='../../assets/servises-1-desk.png' alt='family'/>
                    <h2>FAMILY RELOCATION</h2>
                    <p>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>
                    <button type='button'>Find out more</button>
                </li>
                <li className={css.listItem}>
                    <img src="../../assets/servises-2-desk.png" alt="bussines" />
                    <h2>Business Relocation</h2>
                    <p>We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.</p>
                    <button type='button'>Find out more</button>
                </li>
                <li className={css.listItem}>
                    <img src="../../assets/serveses-3-desk.png" alt="investiment" />
                    <h2>Investment plans</h2>
                    <p>Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.</p>
                    <button type='button'>Find out more</button>
                </li>
            </ul>
       </div>
    )
}
