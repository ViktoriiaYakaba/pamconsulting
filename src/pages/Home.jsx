import { Title } from '../components/title/Title';
import { OurServises } from '../components/ourServises/OurServises';
import { MovingToParadise}  from '../components/movingParadise/MovingToParadise';
import { Choose } from '../components/whyChooseCyprus/Choose';
import { Location } from '../components/location/Location';

const Home = () => {
    return (
        <div>
            <Title />
            <OurServises />
            <MovingToParadise />
            <Choose />
            <Location />

        </div>
    );
}

export default Home;

