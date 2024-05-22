import Liste from "./ComposantsOrgannes/ListeOrgannes"
import Link from "next/link"
import Redirect from "../ComposantsGlobal/Redirect"
export default function Home() {
    
    return (
        <>
            <Redirect></Redirect>
            <h2 className="text-center">Gestion des organes</h2>
            <Liste></Liste>
            <Link href="/GestionOrgannes/0" className="mx-auto mb-5"><button className="btn mx-4"style={{ backgroundColor: 'red' }}> Ajouter un organne</button></Link>
        </>
    )
}