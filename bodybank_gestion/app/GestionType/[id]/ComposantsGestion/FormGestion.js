"use client"
import React from "react";

export default function Home({id}) {
    let [items, setItems] = React.useState('')
    let [nom, setNom] = React.useState("")
    let [desc, setDesc] = React.useState("")
    let [prix, setPrix] = React.useState("")
    let [image, setImage] = React.useState("")
    let [token, setToken] = React.useState("")


    React.useEffect(()=>{
        async function GetItems(){
            let json = await (await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/Types?id=${id}`)).json()
            let item = json[0]
            setItems(item)
            setNom(item.nom)
            setDesc(item.desc)
            setPrix(item.prixBase)
            setImage(item.image)
            setToken(localStorage.getItem('token'))
        }
        if(id!=="0")
            GetItems()
    } ,[])

    async function Action() {
        if(nom!=="" || prixBase!=="" || image!==""){
            var method = id === "0" ? "POST" : "PUT";
            let data = JSON.stringify({
                typeId : id,
                nom: nom,
                prixBase: prix,
                desc : desc,
                image: image
            })

            await fetch('https://projet02-dicjprog4.cegepjonquiere.ca/api/Types', {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: data,
                }).then(response => {
                console.log("Response status:", response)})
                .then(window.location.href = '/GestionType')            
        }
    }

    async function Delete() {
        await fetch('https://projet02-dicjprog4.cegepjonquiere.ca/api/Types/'+id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => {
            console.log("Response status:", response)})
            .then(window.location.href = '/GestionType')
    }
    return (
    <>
        <form className="d-flex flex-column" action={Action}>
            <legend className="text-center">{id === "0" ? "Ajout de type" : "Modification de type"}</legend>
            <div className="col-4 mx-auto w-25">
                <label htmlFor="title">Nom</label>
                <div>
                    <input required className="txtNom form-control" type="text" name="nom" id="nom" value={nom} placeholder="Nom" onChange={e => setNom(e.target.value)}/>
                </div>
            </div>
            <div className="col-4 mx-auto w-25">
                <label htmlFor="prix">Prix de base</label>
                <div>
                    <input required className="txtPrix form-control" type="text" name="prix" id="prix" placeholder="0.00" value={prix} onChange={e => setPrix(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex  flex-column col-4 mx-auto w-25">
                <label htmlFor="description">Description</label>
                <div>
                    <textarea className="txtDescription w-100" name="description" id="" value={desc} onChange={e => setDesc(e.target.value)} cols="65" rows="3"></textarea>
                </div>
            </div>
            <div className="col-4 mx-auto w-25">
                <label htmlFor="img">Source d'image</label>
                <div>
                    <input required className="txtImg form-control" type="text" name="img" id="img" value={image} placeholder="Image.png" onChange={e => setImage(e.target.value)}/>
                </div>
            </div>
            <div className="p-3 d-flex justify-content-center">
                <div className=""><button className="btn m-3" style={{backgroundColor: "#c71010"}} type="submit"> {id === "0" ? 'Ajouter' : 'Modifier'} </button></div>
                {id !== "0" && <div className="m-3"><button className="btn" style={{backgroundColor: "#c71010"}} type="button" onClick={Delete}>Supprimer</button></div>}
            </div>
        </form> 

    </>
    );
}