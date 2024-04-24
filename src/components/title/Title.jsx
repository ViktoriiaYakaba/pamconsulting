import { PopularSities } from "../popularSities/PopularSities";
import css from './Title.module.css';

export const Title = () => {
       
        return (
            <section>
                <div className={css.container}>
                    <ul className={css.list}>
                        <li className={css.listItem}>INVESTIMENTS</li>
                        <li className={css.listItem}>BUSINESS RELOCATION</li>
                        <li className={css.listItem}>FAMILY RELOCATION</li>
                    </ul>
                    <h1 className={css.title}>Relocating to Cyprus</h1>
                    <h4 className={css.titleItem}>Seampless-Exceptional-Experience</h4>
                    <p className={css.text}>The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need </p>
                    <button type='button' className={css.btn}>Find Out More</button>
                    <PopularSities />
                </div>
            </section>
        );
    }


