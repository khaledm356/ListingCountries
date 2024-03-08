import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { Input } from './input';
import { List } from './List';
import axios from 'axios';


interface ICountry {
  code: string;
  name: string;
}
interface IResponseCountry {
  [countryCode: string]: {
      country: string;
      region: string;
  };
}

type CountrySerialized = [string, { country: string; region: string }];

interface IResponse {
  access: string;
  data: IResponseCountry;
  status: string;
  'status-code': number;
  version: string;
}


function App() {
  const API = "https://api.first.org/data/v1/countries"
  
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState<ICountry[]>([]);
  
  const cleanCountries = (countries: any) => {
    const cleanedCountries: ICountry[] = [];
    const serializedCountries: CountrySerialized[] = Object.entries(countries);
    for (let [code, value] of serializedCountries) {
      cleanedCountries.push({
        code: code,
        name: value.country
      });
    }
    return [...cleanedCountries];
  };
  

  const fetchCountries =  useCallback(()=>{
    return axios.get(API).then((res: { data: IResponse }) => {
      setCountries(cleanCountries(res.data.data))
    });
  },[]) 
  
  useEffect(()=>{
    fetchCountries()
  },[fetchCountries])

  const filteredCountries  = useMemo(()=>{
    return countries
      .filter((contry)=>{
        return contry.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
      })
      .map((contry)=>({
        label: contry.name,
        id: contry.code
      }))
    },
    [searchText, countries]
  )

  return (
    <>  
      <Input value={searchText} placeholder='Enter a country name' onChange={(e)=>{ setSearchText(e.target.value) }} />
      <List list={filteredCountries} />
    </>
  )
}

export default App;
