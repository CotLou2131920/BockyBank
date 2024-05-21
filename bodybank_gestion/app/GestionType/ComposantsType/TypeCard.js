import Link from "next/link"
export default function ({type}) {

    return (
        <li className="d-flex my-2 row border"> 
            <div className="col-10 d-flex"><h3 className="col-4">Type: {type.typeId}</h3><h3 className="col-4">Type: {type.nom}</h3><h3 className="col-4"> Prix : {type.prixBase}</h3></div> 
            <Link className="col-2" href={`/GestionType/${type.typeId}`}><button className="btn mx-4"style={{ backgroundColor: 'red' }}>Modifier</button></Link> 
        </li>
  
        )
}