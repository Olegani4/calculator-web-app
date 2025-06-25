import { useState } from 'react';
import historyIcon from '../../assets/ico-history.svg';

function Calculator({calculationsHistory, setCalculationsHistory, handleCalculationsHistory}) {
    const [calculation, setCalculation] = useState('\u00A0');
    const [currentOperator, setCurrentOperator] = useState('');
    const [result, setResult] = useState('0');
    const [isNewInput, setIsNewInput] = useState(true);

    const handleNumber = (number) => {
        let newResult = '';
        if (isNewInput){
            newResult = number;
        }
        else{
            newResult = result + number;
            if (newResult[0] === '0') {
                newResult = newResult.slice(1);
            }
        }

        if (newResult[0] === '.') {
            newResult = '0' + newResult;
        }

        setResult(newResult);
        setIsNewInput(false);
    }

    const handleOperator = (operator) => {
        if (operator === '/' || operator === '*' || operator === '-' || operator === '+') {
            setCalculation(result + ' ' + operator);
            setCurrentOperator(operator);
        }
        else if (operator === '=') {
            if (!currentOperator) {
                return;
            }
            let newResult = eval(calculation + result);
            if (newResult.toString().split('.')[1]?.length > 3) {
                newResult = newResult.toFixed(3);
            }
            setCalculation(calculation + ' ' + result + ' =');
            setResult(newResult);
            setCurrentOperator('');
            setCalculationsHistory([...calculationsHistory, calculation + ' ' + result + ' = ' + newResult]);
            console.log('History length: ', calculationsHistory.length);
        }
        setIsNewInput(true);
    }

    const handleFunction = (func) => {
        if (func === 'AC') {
            setCalculation('\u00A0');
            setResult('0');
        }
        else if (func === '+/-') {
            setResult(result * -1);
        }
        else if (func === '%') {
            setResult(result / 100);
        }
    }

    return (
        <div className="calculator-container">
            <div className="calculator-output">
                <div className='calculator-output-calculation'>
                    <p>{calculation}</p>
                </div>
                <div className='calculator-output-result'>
                    <p>{result}</p>
                </div>
            </div>
            <div className="calculator-display">
                <div className="calculator-display-button function-button">
                        <button onClick={() => handleFunction('AC')}><p>AC</p></button>
                </div>
                <div className="calculator-display-button function-button">
                        <button onClick={() => handleFunction('+/-')}><p>+/-</p></button>
                </div>
                <div className="calculator-display-button function-button">
                        <button onClick={() => handleFunction('%')}><p>%</p></button>
                </div>
                <div className="calculator-display-button operator-button">
                        <button onClick={() => handleOperator('/')}><p>/</p></button>
                </div>
                
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('7')}><p>7</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('8')}><p>8</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('9')}><p>9</p></button>
                </div>
                <div className="calculator-display-button operator-button">
                    <button onClick={() => handleOperator('*')}><p>*</p></button>
                </div>

                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('4')}><p>4</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('5')}><p>5</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('6')}><p>6</p></button>
                </div>
                <div className="calculator-display-button operator-button">
                    <button onClick={() => handleOperator('-')}><p>-</p></button>
                </div>

                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('1')}><p>1</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('2')}><p>2</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('3')}><p>3</p></button>
                </div>
                <div className="calculator-display-button operator-button">
                    <button onClick={() => handleOperator('+')}><p>+</p></button>
                </div>

                <div className="calculator-display-button number-button">
                    <button onClick={() => handleCalculationsHistory()}><img src={historyIcon} alt="history"/></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('0')}><p>0</p></button>
                </div>
                <div className="calculator-display-button number-button">
                    <button onClick={() => handleNumber('.')}><p>.</p></button>
                </div>
                <div className="calculator-display-button operator-button">
                    <button onClick={() => handleOperator('=')}><p>=</p></button>
                </div>

            </div>
        </div>
    )
}

export default Calculator;