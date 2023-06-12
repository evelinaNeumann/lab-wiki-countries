import Country from "./Country";

const CountriesList = ({ countries }) => {
    const countriesListStyle = {
        height: '100vh', 
        overflowY: 'auto', 
    };
    return (
        <div style={countriesListStyle}>
            {
                countries.map((country, index) => (
                    <Country key={country.alpha3Code + index} country={country} />
                ))
            }
        </div>
    );
}
export default CountriesList;