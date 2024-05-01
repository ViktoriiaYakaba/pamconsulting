import image from '../../assets/foto.png';
import css from './WhoWeAre.module.css'

export const WhoWeAre = () => {
  return (
    <div className={css.container}>
         <div className={css.titleContainer}>
            <h2 className={css.title}>Who We Are</h2>
            <p className={css.text}>PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses the services they need to relocate to the island of Cyprus.</p>
            <p className={css.text}>We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs by making sure that the whole relocation process is as smooth and simple as possible.</p>
            <button type="button" className={css.btn}>More about us</button>
         </div>
          <div className={css.card}>
              <img src={image} alt="founder" className={css.img} />
              <h5 className={css.cardTitle}>FOUNDER</h5>
              <p className={css.cardText}>Anastasia Papaharidemou</p>
              <button type="button" className={css.cardBtn}>Contact</button>
          </div>
    </div>
  )
}


