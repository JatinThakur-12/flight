import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';

const Input2 = ({ label, location, handleLocation, airportData }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState('');
    const [clientCountry, setClientCountry] = useState('');

    // Fetch client IP and country when the component mounts
    useEffect(() => {
        const fetchClientCountry = async () => {
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();
                const ipAddress = ipData.ip;
                console.log("My ip", ipAddress);

                const countryResponse = await fetch(`https://ipinfo.io/${ipAddress}/json`);
                const countryData = await countryResponse.json();
                setClientCountry(countryData.country); // Assuming the country code is given
                console.log("Mycountry:", countryData.country);
            } catch (error) {
                console.error('Error fetching client country:', error);
            }
        };

        fetchClientCountry();
    }, []);

    // Fetch suggestions based on input
    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        // Filter suggestions based on client country and input text
        return airportData
            .filter((airport) =>
                airport.airportCode.toLowerCase().includes(inputValue) ||
                airport.airportName.toLowerCase().includes(inputValue) ||
                airport.cityCode.toLowerCase().includes(inputValue) ||
                airport.cityName.toLowerCase().includes(inputValue) ||
                airport.countryCode.toLowerCase().includes(inputValue) ||
                airport.countryName.toLowerCase().includes(inputValue))
            .sort((a, b) => {
                // Sort by country priority if client country is known
                if (clientCountry) {
                    if (a.countryCode === clientCountry && b.countryCode !== clientCountry) {
                        return -1;
                    } else if (a.countryCode !== clientCountry && b.countryCode === clientCountry) {
                        return 1;
                    }
                }
                return 0;
            });
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const renderSuggestion = (suggestion) => (
        <div>
            {suggestion.airportName} ({suggestion.airportCode}) - {suggestion.countryName}
        </div>
    );

    return (
        <div className='w-1/2'>
            <h2>{label}</h2>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={(suggestion) => suggestion.airportName}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={(event, { suggestionValue }) => {
                    // Set input value to the selected suggestion
                    console.log(suggestionValue)
                    setInput(suggestionValue);
                }}
                inputProps={{
                    placeholder: 'Type an airport name or code',
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                }}
            />
        </div>
    );
};

export default Input2;
