import React, { useState } from 'react'
import './impact.scss'
export default function Impact(){
    
    const [data,setData]=useState([
        {
            name:'a'
        },
        {
            name:'b'
        },
        {
            name:'c'
        }
    ])

    const onAddCard=(id,idNext)=>{
        let newData = {
            name:'new'
        }
        let allData = data
        allData.splice(idNext,0,newData)
        setData([...allData])
    }
    const render=()=>{
        return data.map((val,index,array)=>{
            return (
                <div key={index} className="container-box">
                    <div className="card">
                    <p>{val.name}</p>
                    </div>
                    {
                        index === array.length - 1 ?
                        <>
                        </>
                        : 
                        <div className="btn" onClick={()=>onAddCard(index,index+1)}>
                        </div>  
                    }
                </div>
            )
        })
    }

    return (
        <>
        <div className="container-card">
            {render()}
        </div>
        
        </>
    )
}