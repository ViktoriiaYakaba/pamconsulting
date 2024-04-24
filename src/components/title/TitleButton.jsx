import { useState } from "react";
import { Link } from "react-alice-carousel";

import TitleInvest from "./TitleInvest";




const TitleButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);


   const handleChange = (option) => {
        setSelectedOption(option);
    }

    return (
        <div>
          
             <Link to='/titleInvest' onClick={() => handleChange(<TitleInvest/>)}>
                <input type="radio" checked={selectedOption === 'titleInvest'} />
            </Link>
            
       </div>
   )
}

export default TitleButton;
