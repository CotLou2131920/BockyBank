import Liste from "./ComposantsType/ListeTypes.js";
import Link from "next/link.js";
import Redirect from "../ComposantsGlobal/Redirect.js";
export default function Home() {
    return (
      <>

        <Redirect></Redirect>
        <h2 className="text-center">Gestion des types</h2>
        <Liste></Liste>
        <Link href="/GestionType/0" className="mx-auto mb-5"><button className="btn mx-4"style={{ backgroundColor: 'red' }}> Ajouter un Type</button></Link>
      </>
    );
  }
  