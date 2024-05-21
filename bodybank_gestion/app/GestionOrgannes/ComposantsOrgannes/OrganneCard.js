import Link from "next/link"

export default function({organne}){


    return (
        <li className=" my-2 row border" > 
            <div className="col-10 d-flex ">
                <h3 className="col-3">Id: {organne.organneId}</h3>
                <h3 className="col-3">Type: {organne.type.nom}</h3>
                <h3 className="col-3">Prix : {organne.prix}</h3>
                <h3 className="col-3"> Donneur: {organne.donneur.prenom} {organne.donneur.nom}</h3>   
                <Link href={`/GestionOrgannes/${organne.organneId}`} className="col-2"><button className="btn mx-4"style={{ backgroundColor: 'red' }}>Modifier</button></Link> 
            </div>
            
        </li>
  
        )
}