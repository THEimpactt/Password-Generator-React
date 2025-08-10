import React, { useState } from 'react'
import { LC, NC, SC, UC } from './SourceChar'
import './Passy.css'

export default function PassGen() {
    let [upr,setUpr]=useState(false)
    let [lwr,setLwr]=useState(false)
    let [numbr,setNumbr]=useState(false)
    let [spl,setSpl]=useState(false)
    let [plength,setPlength]=useState(10)
    let [lastp,setLastp]=useState('')

    let createPass=()=>{
        let takeChar=''
        let finpas=''
        if(upr || lwr || numbr || spl){
          if(upr) takeChar += UC;
          if(lwr) takeChar += LC;
          if(numbr) takeChar += NC;
          if(spl) takeChar += SC;
          for(let i=0; i<plength; i++){
            finpas += takeChar.charAt(Math.floor(Math.random()*takeChar.length))
          }
          setLastp(finpas)
        }
        else{
          alert("Atleast one checkbox must be selected")
        }
    }
    let copyit=()=>{
      navigator.clipboard.writeText(lastp)
    }
  return (
    <div className='container'>
      <div className='head'>
        <h1>Password Generator</h1>
      </div>
      <div className='getting'>
        <input type="text" value={lastp}/> <button onClick={copyit} >Copy</button>
      </div>
      <div className='plenghth'>
        <label>Password Length:</label>
        <input type="number" max={16} min={8} value={plength} onChange={(e)=>setPlength(e.target.value)} />
      </div>
      <div className='ucase'>
        <label>Include Uppercase Letters</label>
        <input type="checkbox" checked={upr} onChange={()=>setUpr(!upr)}/>
      </div>
      <div className='lcase'>
        <label>Include Lowercase Letters</label>
        <input type="checkbox" checked={lwr} onChange={()=>setLwr(!lwr)} />
      </div>
      <div className='ncase'>
        <label>Include Numbers</label>
        <input type="checkbox" checked={numbr} onChange={()=>setNumbr(!numbr)} />
      </div>
      <div className='scase'>
        <label>Include Symbols</label>
        <input type="checkbox" checked={spl} onChange={()=>setSpl(!spl)} />
      </div>
      <div className='btn'>
        <button onClick={createPass} >Generate</button>
      </div>
    </div>
  )
}
