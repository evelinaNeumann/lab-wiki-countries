import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {
    // get the country code from the url
    const countryCode = useParams().countryCode;
    // find the country in the array of countries (commented out because we will fetch the country from the API in the bonus part)
    // const country = countries.find(country => country.alpha3Code === countryCode);

    const [country, setCountry] = useState(null);

    
    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then(response => response.json())
            .then(data => setCountry(data));
    }, [countryCode]);


    
    const findCountryName = (countryCode) => {
        const country = countries.find(country => country.alpha3Code === countryCode);
        return country.name.common;
    }

    return (
        <>
            {
                country ?
                    <div className="">
                        < h3 > {country.name.common}</h3 >
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "30%" }}>Capital</td>
                                    <td>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{country.area} km
                                        <sup>2</sup>
                                    </td>
                                </tr>
                                {
                                    country.borders.length > 0 &&
                                    <tr>
                                        <td>Borders</td>
                                        <td>
                                            <ul
                                                style={{
                                                    listStyleType: "none",
                                                    padding: "0"
                                                }}
                                            >
                                                {
                                                    country.borders.map((border, index) => (
                                                        <li key={border + index}>
                                                            <Link to={`/country/${border}`}>
                                                                {findCountryName(border)}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </td>
                                    </tr>

                                }
                            </tbody>
                        </table>
                    </div >
                    :
                    <div>Loading...</div>
            }
        </>
    );
}
export default CountryDetails;