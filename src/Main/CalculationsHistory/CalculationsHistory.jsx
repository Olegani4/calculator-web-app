import { useState } from "react";

function CalculationsHistory({calculationsHistory, setCalculationsHistory}) {
    const [historyLength, setHistoryLength] = useState(3);
    const calculationsHistoryList = [...calculationsHistory].reverse().slice(0, historyLength).map((calculation, index) => {
        return (
            <li key={index}>{calculation}</li>
        )
    })

    return (
        <div className="calculations-history">
            <ul>
                {calculationsHistoryList}
            </ul>
            {calculationsHistory.length > 0 &&
                <div className="calculations-history-buttons">
                    {calculationsHistory.length > historyLength &&
                        <button className="load-more-button" onClick={() => setHistoryLength(historyLength + 3)}><p>Load More</p></button>
                    }
                    <button className="clear-history-button" onClick={() => setCalculationsHistory([])}><p>Clear History</p></button>
                </div>
            }
        </div>
    )
}

export default CalculationsHistory;