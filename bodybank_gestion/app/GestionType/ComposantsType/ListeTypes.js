'use client'
import React from "react"
import Card from "./TypeCard.js"
export default function ListeTypes() {
    let [items, setItems] = React.useState('')

    React.useState(()=>{
        async function GetItems(){
            await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/Types`)
            .then(response => response.json())
            .then(json => setItems(json))
        }
        GetItems()
    } ,[])

    return (
        <>
        <ul className="container">
            {Array.from(items).map(item=><Card key={item.typeId} type={item}></Card>)}
        </ul>  
        </>
    )
}