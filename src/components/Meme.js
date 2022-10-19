/* eslint-disable */ 
import React from "react"

export default function Meme() {
     const [initialMemes,setInitialMemes]=React.useState([])
     const [meme,setMeme]=React.useState("https://i.imgflip.com/46e43q.png")

     React.useEffect(()=>{
          fetch("https://api.imgflip.com/get_memes")
          .then(res=>res.json())
          .then(memeDatas=>{
               console.log(memeDatas.data.memes[0].url)
               setInitialMemes(memeDatas.data.memes)
          })
     },[])

     const getMeme=()=>{
          setMeme(initialMemes[Math.floor(Math.random() * initialMemes.length)].url)
     }
     return (
          <main>         
               <button 
               className="form--button"
               onClick={getMeme}
               >
               Get new meme
               </button>
               <img src={meme} className="meme--image" />
          </main>
     )
}