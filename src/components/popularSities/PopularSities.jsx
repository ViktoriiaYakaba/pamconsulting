import css from './PopularSities.module.css';

export const PopularSities = () => {
    return (
        <div className={css.container}>
            <h4 className={css.title}>Most popular cities</h4>
            <ul className={css.list}>
                <li className={css.listItem}>
                    <img src="/src/assets/nicosia-min.png" alt="Nicoscia" />
                    <p>Nicosia</p>
                </li>
                <li className={css.listItem}>
                    <img src="/src/assets/limassol-min.png" alt="Limassol" />
                    <p>Limassol</p>
                </li>
                <li className={css.listItem}>
                    <img src="/src/assets/paphos-min.png" alt="Paphos" />
                    <p>Paphos</p>
                </li>
                <li className={css.listItem}>
                    <img src="/src/assets/larnaka-min.png" alt="Larnaka" />
                    <p>Larnaka</p>
                </li>
            </ul>
        </div>
    );
}
