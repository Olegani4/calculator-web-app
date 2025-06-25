import { useState } from 'react';
import Calculator from './Calculator/Calculator';
import CalculationsHistory from './CalculationsHistory/CalculationsHistory';

function MainSection() {
    const [calculationsHistory, setCalculationsHistory] = useState([]);
    const [isCalculationsHistoryOpened, setIsCalculationsHistoryOpened] = useState(false);
    const handleCalculationsHistory = () => {
        setIsCalculationsHistoryOpened(!isCalculationsHistoryOpened);
    }

    return (
        <main>
            <Calculator calculationsHistory={calculationsHistory} setCalculationsHistory={setCalculationsHistory} handleCalculationsHistory={handleCalculationsHistory} />
            <br />
            {isCalculationsHistoryOpened && <CalculationsHistory calculationsHistory={calculationsHistory} setCalculationsHistory={setCalculationsHistory} />}
        </main>
    )
}

export default MainSection;