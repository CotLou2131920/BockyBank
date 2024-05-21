"use client"
import React from "react";

export default function Home({id}) {

    let [disponible, setDisponible] = React.useState(true)
    let [prix, setPrix] = React.useState("")

    let [types, setTypes] = React.useState([])
    let [typeId, setTypeId] = React.useState("")
    let [donneurs, setDonneurs] = React.useState([])
    let [donneurId, setDonneurId] = React.useState('')
    let [token, setToken] = React.useState("")


    const disponibleClick = () => {
        setDisponible(!disponible)
    };

    React.useEffect(()=>{
        async function GetItems(){
            let json ="";
            if(id!=="0"){
                json = await (await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/Organnes?id=${id}`)).json()
                console.log(json)
                let item = json
                console.log(item)
                setPrix(item.prix)
                setTypeId(item.type.typeId)
                setDonneurId(item.donneur.donneurId)
                setDisponible(item.disponible)
                setToken(localStorage.getItem("token"))
            }
            json = await (await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/Types`)).json()
            setTypes(json)

            json = await (await fetch(`https://projet02-dicjprog4.cegepjonquiere.ca/api/Donneurs`)).json()
            setDonneurs(json)
        }
            GetItems()
    } ,[])

    async function Action() {
        if(prix!=="" || donneurId!=="" || typeId!==""){
            var method = id === "0" ? "POST" : "PUT";
            let donneur = donneurs.filter(item => item.donneurId === donneurId)[0]
            console.log(types   )
            let type = types.filter(item => item.typeId == typeId)[0]
            console.log(type)

            let data = JSON.stringify({
                organneId : id,
                disponible: disponible,
                prix: prix,
                type : type,
                donneur: donneur
            })

            await fetch('https://projet02-dicjprog4.cegepjonquiere.ca/api/Organnes', {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: data,
                }).then(response => {
                console.log("Response status:", response)})
                .then(window.location.href = '/GestionOrgannes')
        }
    }

    async function Delete() {
        await fetch('https://projet02-dicjprog4.cegepjonquiere.ca/api/Organnes/'+id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => {
            console.log("Response status:", response)})

    }
    return (
    <>
        <form className="d-flex flex-column justify-content-center" action={Action}>
            <legend className="text-center">{id === "0" ? "Ajout d'organne" : "Modification d'organne"}</legend>
            <div className="col-4 d-flex flex-column mx-auto w-25">
                <label htmlFor="title">Statut</label>
                <div>
                    <label className="mx-5">disponible: <input type="checkbox" checked={disponible} onChange={disponibleClick} /></label>
                    <label className="mx-5">non-disponible: <input type="checkbox" checked={!disponible} onChange={disponibleClick} /></label>
                </div>
            </div>
            <div className="col-4 mx-auto w-25">
                <label htmlFor="prix">Prix</label>
                <div className="">
                    <input required className="txtPrix form-control" type="text" name="prix" id="prix" placeholder="0.00" value={prix} onChange={e => setPrix(e.target.value)}/>
                </div>
            </div>
            <div className="col-4 mx-auto d-flex flex-column w-25">
                <label htmlFor="img">Type</label>
                <select style={{backgroundColor: "#ff8080"}} value={typeId} onChange={e => setTypeId(e.target.value)}>
                    {types.map((type) => <option key={type.typeId} value={type.typeId}>{type.nom}</option>)}
                </select>
            </div>
            <div className="col-4 mx-auto d-flex flex-column w-25">
                <label htmlFor="img">Donneur</label>
                <select style={{backgroundColor: "#ff8080"}} value={donneurId} onChange={e => setDonneurId(e.target.value)}>
                    {donneurs.map((donneur) => <option key={donneur.donneurId} value={donneur.donneurId}>{donneur.prenom} {donneur.nom}</option>)}
                </select>
            </div>
            <div className="p-3 d-flex justify-content-center">
                <div className=""><button className="btn m-3" style={{backgroundColor: "#c71010"}} type="submit"> {id === "0" ? 'Ajouter' : 'Modifier'} </button></div>
                {id !== "0" && <div className="m-3"><button className="btn" style={{backgroundColor: "#c71010"}} type="button" onClick={Delete}>Supprimer</button></div>}
            </div>
        </form> 
    </>
    );
}