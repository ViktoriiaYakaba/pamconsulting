import { Title } from '../components/title/Title';
import { OurServises } from '../components/ourServises/OurServises';
import { MovingToParadise}  from '../components/movingParadise/MovingToParadise';
import { Choose } from '../components/whyChooseCyprus/Choose';
import { Location } from '../components/location/Location';
import { WhoWeAre } from '../components/whoWeAre/WhoWeAre';
import { HowWeMake } from '../components/howWeMake/HowWeMake';
import { Contact } from '../components/contact/Contact';

const Home = () => {
    return (
        <div>
            <Title />
            <OurServises />
            <MovingToParadise />
            <Choose />
            <Location />
            <WhoWeAre />
            <HowWeMake />
            <Contact />

        </div>
    );
}

export default Home;

