'use client'
import React from "react";
import Card from "./OrganneCard";

export default function(){
    
    let [items, setItems] = React.useState([])
    React.useState(()=>{
        async function GetItems(){
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
            await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/organnes`)
            .then(response => response.json())
            .then(json => setItems(json))
        }
        GetItems()
    } ,[])

    return (
        <>
            <ul className="container">
                {Array.from(items).map(item=><Card key={item.organneId} organne={item}></Card>)}
            </ul>
        </>
    )

}
