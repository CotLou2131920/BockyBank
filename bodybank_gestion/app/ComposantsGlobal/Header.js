import Link from 'next/link'
import css from "../css/style.css";

export default function Header()
{
    return<>
        <header style={css.Header} >
    </header>
    <div className="d-flex" >
        <img src="/Image/Logo.png" alt="" className="col-8 col-md-2 logo" style={css.logo}></img>
        <nav className="navbar navbar-expand-md menu " style={css.nav}>
            <div className="container-fluid" style={css.menu}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="col-12 ">
                    <Link href="/" className="" >Accueil</Link> 
                    <Link href="/GestionType" className="" >Types</Link> 
                    <Link href="/GestionOrgannes" className="" >Organnes</Link> 
                    <Link href="/Login"><img src="/Image/Profil.png" alt="" className=""></img></Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
    
    </> 
}
  
