import css from "../css/style.css";

export default function Footer()
{
    return<>
    <footer className="mt-auto text-center ">
        <div className="container text-center p-5"style={css.footer}>
            <a href="" className="media"><img src="/Image/Fb.png" alt="" className="col-1 img-fluid "></img></a>
            <a href="" className="media"><img src="/Image/Twitter.png" alt="" className="col-1 img-fluid "></img></a>
            <a href="" className="media"><img src="/Image/linkedIn.png" alt="" className="col-1 img-fluid "></img></a>
        </div>
        <p className="text-light">Centre d'expertise et de perfectionnement en vente d'organes</p>
        <p className="text-light">2024</p>
    </footer>

    </>
}