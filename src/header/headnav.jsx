import React, { useState } from "react";
import data from '../body/harry-potter.json'
import CharCard from '../body/char_card';
import CharCardFail from "../body/char_card_fail";



export default function Headnav() {

    const [curr, setVal] = useState("");
    const [currentIndex, setIndex] = useState(0);
    const [showSuggestion, SetSuggestion] = useState(false);
    const [showCharCard,setShowCharCard]= useState(true);
    const [showCharCardFail,setShowCharCardFail]= useState(false);

    function autocomplete(e) {
       
        setVal(e.target.innerText)
        SetSuggestion(false)
    }

    let i;
    function search() {
        SetSuggestion(false);
        for (i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() === curr.toLowerCase())
               {
                setShowCharCard(true);
                setShowCharCardFail(false);
                setIndex(i);
                break;
               } 
        }
        if(i>=data.length){
            setShowCharCard(false);
            setShowCharCardFail(true);
        }

    }


    return (
        <div>
            <div className=" p-4 flex justify-center relative ">
                <div className="w-3/5 ">
                    <input onChange={(e) => {
                        const value = e.target.value;

                        SetSuggestion(true)

                        setVal(value)
                    }} value={curr} type="text" autoComplete="off" id="searchbox" className=" p-4 text-black border-solid border-2 border-slate-600 rounded-md searchInput" placeholder="Search a name of your favourite character to know more" />
                    <button onClick={search} className="bg-blue-500 w-20 rounded-md ml-2 py-2 absolute top-5 "><img src="./search-icon.webp" alt="" className="ml-6 w-8" /></button>
                    <div className="absolute w-2/5 ">
                        <div className="suggestions">
                            {showSuggestion &&
                                data.filter((val) => {
                                    if (curr === "")
                                        return false;
                                    else
                                        return val.name.toLowerCase().includes(curr.toLowerCase());
                                }).slice(0, 6)
                                    .map((val, key) => <div key={key} className="bg-white border border-solid border-black" onClick={autocomplete}>{val.name}</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                showCharCard&&
                <CharCard currentIndex={currentIndex} />
            }
            {
                showCharCardFail &&
                <CharCardFail />
                
            }
        </div>
    )
}
// to solve the problem to remove the div of suggestion -className -- you need to re render the component for that just use a state of boolean and change the state

