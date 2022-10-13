import React from "react"
import charD from './harry-potter.json'

export default function CharCard({ currentIndex }) {

    return (
        <div className="border-dotted border-2 p-5 border-yellow-800 flex bg-slate-200">
            <div className="mr-3 ">
                {
                    charD[currentIndex].image &&
                    <img src={charD[currentIndex].image} alt={charD[currentIndex].name + ' image'} className="h-60" />
                }
            </div>
            <div>
                <p className="text-4xl underline">{charD[currentIndex].name}</p>
                <br />
                <p>
                    <b>Gender:</b> {charD[currentIndex].gender}, <b>Born:</b> {charD[currentIndex].dateOfBirth}, <b>House:</b> {charD[currentIndex].house}
                </p>
                <p>
                    <b>{charD[currentIndex].wizard ? "Is a wizard" : "Not a wizard"},</b>  <b>  Ancestry:</b> {charD[currentIndex].ancestry}, <b>Eye Colour:</b> {charD[currentIndex].eyeColour}
                </p>
                <p>
                    {
                        charD[currentIndex].wand.length &&
                        <><b>Wand : </b> <u>{charD[currentIndex].wand.wood}</u> wood, <u>{charD[currentIndex].wand.core}</u> core, <u>{charD[currentIndex].wand.length}</u> inches length.</>
                    }
                </p>
                <p>
                    <b>Played By:</b> <u>{charD[currentIndex].actor}</u>, <b>Alternate Actors:</b> {charD[currentIndex].alternate_actors.length === 0 ? " none" : charD[30].alternate_actors}
                </p>
                <p>
                    {
                        charD[currentIndex].patronus&&
                    <><b>Patronous:</b> <u>{charD[currentIndex].patronus} </u></>
                    }
                </p>
                <p>
                    <b>{charD[currentIndex].hogwartsStudent ? "A hogwarts Student" : "Not a Hogwarts Student"} </b>
                </p>
            </div>
        </div>
    )
}
