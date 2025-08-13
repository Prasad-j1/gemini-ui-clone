/*import { createContext } from "react";
import { getGeminiResponse } from "../Services/GiminiServ";
export const context=createContext();

const ContextProvider=(props)=>{



    const onSent=async(prompt)=>{
        await getGeminiResponse(prompt)
    }

    onSent("What is React");

    const contextvalue={


    }



    return (
        <context.Provider value={contextvalue}>
            {props.child}
        </context.Provider>
    );
}

export default ContextProvider;*/