import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [values, setValues] = useState([
    'AC',
    '+/-',
    '%',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ]);
  const [result, setResult] = useState('');
  const [concat, setConcat] = useState('');
  const [next, setnext] = useState('');

  const calculate = (opr) => {
    setResult('');
    let operations = '%-+/x';
    let equalto = '=';
    let prev = concat;
    let nextVal = next;

    if (opr == '=') {
      let expr = eval(prev);
      setResult(expr);
      setConcat(expr);
    } else {
      if (opr == 'AC') {
        setResult('');
        setConcat('');
        setnext('');
      } else if (operations.includes(opr)) {
        if (opr == 'x') {
          opr = '*';
        }

        let final = prev + opr;
        setConcat(final);
        setnext('');
        setResult('');
      } else {
        let final = prev + opr;
        let disp = next + opr;
        setConcat(final);
        setnext(disp);
        setResult(disp);
      }
    }
  };
  return (
    <div className="main_div">
      <div className="result_div">
        <p>{result == '' ? 0 : result}</p>
      </div>
      {values.map((val, ind) => {
        return (
          <div
            key={ind}
            className={
              '+-x/='.includes(val)
                ? 'li_disp disp_hightlight'
                : 'AC+/-%'.includes(val)
                ? 'li_disp disp_opr'
                : val == '0'
                ? 'li_disp disp_zero'
                : 'li_disp disp_num'
            }
            onClick={(clicked) => {
              calculate(clicked.target.innerHTML);
            }}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}
