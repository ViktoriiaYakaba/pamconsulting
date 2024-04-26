import image from '../../assets/mapa.jpg';
import img1 from '../../assets/limassol-1.png';
import img2 from '../../assets/limassol-2.png';
import img3 from '../../assets/limassol-3.png';
import css from './Location.module.css';

export const Location = () => {
  return (
    <div className={css.container}>
          <h3 className={css.title}>FIND THE IDEAL LOCATION TO CALL HOME</h3>
          <p className={css.text}>Tap on any city to learn more about it</p>
          <img src={image} alt="mapa" className={css.image } />
          <div className={css.containerItem}>
              <ul className={css.list}>
                  <li className={css.listItem}>
                      <img src={img1} alt="limassol" className={css.imageCard } />
                  </li>
                  <li className={css.listItem}>
                      <img src={img2} alt="limassol" className={css.imageCard } />
                  </li>
                  <li className={css.listItem}>
                      <img src={img3} alt="limassol" className={css.imageCard } />
                  </li>
              </ul>
              <h5 className={css.titleCard}>Limassol</h5>
              <p className={css.textCard}>The sunny city of Limassol is the second largest city of the island, and it is among the most desirable travel and business destinations both for families and for entrepreneurs looking to expand their business horizons. The combination of elegant accommodation and ancient architectural views is bound to capture the interest of people of any age.</p>
              <p className={css.textCard}>The Limassol Marina is the first marina to harbor yachts in Cyprus and it is surrounded by renowned bars and restaurants. The residents of Limassol pride themselves on their cultural values and festivities as hundreds of theatrical performances take place each year at the Rialto theater, and the city holds an annual Wine Festival and Carnival Parade.</p>
          </div>
    </div>
  )
}


