import { useState } from 'react';
import MainUI from './Components/MainUI';

const MainContainer = () => {

    const [numberOfLoops, setNumberOfLoops] = useState(1)

console.log(numberOfLoops)

    return ( 
        <MainUI 
        numberOfLoops={numberOfLoops}
        setNumberOfLoops={setNumberOfLoops}
      />
     );
}
 
export default MainContainer;