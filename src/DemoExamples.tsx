import { useState } from "react";
import UseEffectExamples from "./UseEffectExamples";
import GrandParent from "./Grandparent";
import ValueContext from "./ValueContext";

export default function DemoExamples(){
    const [hide, setHide] = useState(false);

    return (
        <>           
            <input type="checkbox" onChange={() => setHide(!hide)} ></input>hide
            {hide ? null : <UseEffectExamples></UseEffectExamples>}
            <ValueContext.Provider value={hide}>
                <GrandParent></GrandParent>
            </ValueContext.Provider>           
        </>
    )
}
