import React from "react";
import data from '../body/harry-potter.json'


export default function headnav(props){
    
    function capitaliseFirstLetter(str){
        const words=str.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        str=words.join(' ');
        return str;
        
    }
    
    function search(){
        let content = document.getElementById("searchbox").value;
        content=capitaliseFirstLetter(content);
        let i;
        for(i=0;i<data.length;i++){
            if(data[i].name===content)
            break;
        }
        
        props.changeInFunc(i);
        
    }
    
    return(
        <div className="w-screen p-4 flex justify-center">
            <input type="text" id="searchbox" className="w-1/2 p-4 text-black border-solid border-2 border-slate-600 rounded-md" placeholder="Search a name of your favourite character to know more" />
            <button onClick={search} className="bg-blue-500 w-20 rounded-md ml-2 py-2"><img src="./search-icon.webp" alt="" className="ml-6 w-8"/></button>
        </div>
    )
}



