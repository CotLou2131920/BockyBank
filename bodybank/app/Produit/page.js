export default function Home() {
    return (
        <form action="/filter" method="post" className="p-2">
            <fieldset>
                <div className=" d-flex ">
                    <h3 className="col-4 justify-content-left mx-5">Sélectionner les types d'organes :</h3>
                    <div className="col-8">
                        <label for="rein" className="p-2 text-center">
                            <input type="checkbox" id="rein" name="organType" value="rein"></input>
                            Rein
                        </label>
                        <label for="poumon" className="p-2">
                            <input type="checkbox" id="poumon" name="organType" value="poumon"></input>
                            Poumon
                        </label>
                        <label for="coeur" className="p-2">
                            <input type="checkbox" id="coeur" name="organType" value="coeur"></input>
                            Cœur
                        </label>
                        <label for="foie" className="p-2">
                            <input type="checkbox" id="foie" name="organType" value="foie"></input>
                            Foie
                        </label>
                        <label for="pancreas" className="p-2">
                            <input type="checkbox" id="pancreas" name="organType" value="pancreas"></input>
                            Pancéras
                        </label>
                    </div>
                </div>
        </fieldset>
        </form>
    );
  }
  