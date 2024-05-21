export default function OrganeCard({ organes, type}) {
 
 
    let image;
    
        type.forEach(t => { if (t.ID == organes.Type)
            {
                image = t.Image
            }
        });
        let lien;
    switch (organes.Type) {
        case 1: lien = "https://buy.stripe.com/test_28o9Bm1636WZbYYbIK";
            break;
        case 2: lien = "https://buy.stripe.com/test_7sI14Q1633KNfba003";
            break;
        case 3: lien = "https://buy.stripe.com/test_dR64h201Z9577II7sw";
            break;
        case 4: lien = "https://buy.stripe.com/test_28o8xi6qn6WZ9QQ289";
            break;
        default : lien = "https://buy.stripe.com/test_28o4h2bKH9574wwaEJ";
            break;
        
    }

    
    
 
    return (
        <article className=" border border-secondary col-8 col-md-3  m-5 bg-dark bg-opacity-75">
           <img className="mx-auto d-block img-fluid pb-2" src={`./Image/`+image} alt="" />
            <a className="text-decoration-none" style={{ color: '#FFFFFF' }} href={``}>
                <h5 className="text-center bg-secondary bg-dark ">{organes.Donneur}</h5>
            </a>
            <p className="m-3 text-center text-light">{organes.Prix}$</p>
            <a className="btn btn-outline-light m-3 d-block" href={lien} role="button">Acheter</a>
        </article>
    );
}
