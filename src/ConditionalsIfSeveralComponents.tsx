import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";

export default function ConditionalsIfSeveralComponents(){
    const [selectedRate, setSelectedRate] = useState(1);

    function displayResult(){
        if (selectedRate == 1){
            return <span>Nooo!</span>
        }else if (selectedRate == 2){
            return (
            <>
            <span>Please tell us how to get better:</span>
            <input type="text"></input>
            </>);
        }else if (selectedRate == 3){
            return (
                <>
                    <Simple></Simple>
                </>
            );
        }else {
            return <span>Thanks!</span>
        }
    }

    return (
        <>
            <h1>Conditionals If example</h1>

            <div>Rate this website</div>
            {/* <SelectNumber maxValue={5} onSelected={setSelectedRate}></SelectNumber> */}
            
            {/* Use default value */}
            <SelectNumber onSelected={setSelectedRate}></SelectNumber>

            <div>
                {displayResult()}
            </div>
        </>

    )
}