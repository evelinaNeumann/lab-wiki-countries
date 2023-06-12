import { Link } from "react-router-dom";

const Country = ({ country }) => {
   
    return (
        <div className="
        col-5 
        border
        p-3
        ">
            <h4>{country.name.common}</h4>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
            <div className="p-3">
                <Link to={`/country/${country.alpha3Code}`}>
                    <button
                        className="btn btn-info">
                        See more details
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Country;