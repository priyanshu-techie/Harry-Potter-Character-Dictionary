import error from "../assets/error.gif"

export default function charCard_fail(){
    return(
        <div className="border-dotted border-2 p-5 border-yellow-800 flex bg-slate-200">
        <div>
            <img src={error} />
        </div>
        <div>
        <h1>Error.....!!</h1>
        <h2>No such name found</h2>
        </div>
    </div>
    )
    
}
 