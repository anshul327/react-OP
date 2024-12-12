import React, { useId } from "react";

function InputBox({
    label, 
    amount,
    onAmountChange,
    onCurrChange,
    currOptions=[], //by default setting up array to prevent crashes
    selectCurr= 'usd',
    amountDisable=false,
    currencyDisable=false,

    classname="",

}) {
    const amountInputId= useId() //extras, generate unique ids to bind different elements

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    //id's in both label and input to link them
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurr}
                    onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {currOptions.map(( currency ) => (
                        // we use key for better performance in jsx when loop
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox