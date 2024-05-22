'use client'
import OrganeCard from "./OrganeCard"
import React from "react"




export default function OrganeList(){

    let [organes, setOrganes] = React.useState([])
    let [type, setType] = React.useState([])


    React.useEffect(() => {
        async function GetOrganes(){

            await fetch("http://localhost:3000/Organes")
            .then(response => response.json())
            .then(json => json.reverse())
            .then(json => setOrganes(json))
        }
        GetOrganes()
        
    }, [])
    React.useEffect(() => {
        async function GetType(){

            await fetch("http://localhost:3000/Type")
            .then(response => response.json())
            .then(json => json.reverse())
            .then(json => setType(json))
        }
        GetType()
        
    }, [])


    
    

   
    return (
    <>
        <div className="row justify-content-center  " style={{backgroundColor: "222831"}}>
            {Array.from(organes).map(organes=><OrganeCard key = {organes.id} organes = {organes} type = {type} ></OrganeCard>)}
        </div>
    </>
    )
}