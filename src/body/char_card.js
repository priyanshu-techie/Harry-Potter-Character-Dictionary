import React from "react"
import charD from './harry-potter.json'

export default function CharCard(props) {
    
    return (
        <div className="border-dotted border-2 p-5 border-yellow-800 flex">
            <div className="mr-3 "><img src={charD[props.currentIndex].image} alt={charD[props.currentIndex].name+' image'} className="h-60" /></div>
            <div>
                <p className="text-4xl underline">{charD[props.currentIndex].name}</p>
                <br/>
                <p>
                    <b>Species:</b> {charD[props.currentIndex].gender}, <b>Born:</b> {charD[props.currentIndex].dateOfBirth}, <b>House:</b> {charD[props.currentIndex].house}
                </p>
                <p>
                    <b>{charD[props.currentIndex].wizard?"Is a wizard":"Not a wizard"},</b>  <b>  Ancestry:</b> {charD[props.currentIndex].ancestry}, <b>Eye Colour:</b> {charD[props.currentIndex].eyeColour}
                </p>
                <p>
                    <b>Wand : </b> <u>{charD[props.currentIndex].wand.wood}</u> wood, <u>{charD[props.currentIndex].wand.core}</u> core, <u>{charD[props.currentIndex].wand.length}</u> inches length.
                </p>
                <p>
                    <b>Played By:</b> <u>{charD[props.currentIndex].actor}</u>, <b>Alternate Actors:</b> {charD[props.currentIndex].alternate_actors.length==0?" none":charD[30].alternate_actors}    
                </p>
                <p>
                    <b>Patronous:</b> <u>{charD[props.currentIndex].patronus} </u> 
                </p>
                <p>
                <b>{charD[props.currentIndex].hogwartsStudent?"A hogwarts Student":"Not a Hogwarts Student"} </b>
                </p>
            </div>
        </div>
    )
}
