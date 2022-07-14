import React, { useState, useEffect } from 'react';
import Card from './Card';
import Pokeinfo from './Pokeinfo';
import axios from 'axios';

const Main = () => {
    const [pokeDat, setPokeDat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true);
        const resp = await axios.get(url);
        //console.log(resp.data.results);
        setNextUrl(resp.data.next);
        setPrevUrl(resp.data.previous);
        getPokemon(resp.data.results);
        setLoading(false);
        //console.log(pokeDat);
    };
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url);
            //console.log(result.data);
            setPokeDat((state) => {
                state = [...state, result.data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            });
        });
    };
    useEffect(() => {
        pokeFun();
    }, [url]);

    return (
        <div className='container'>
            <div className='left-content'>
                <Card
                    pokemon={pokeDat}
                    loading={loading}
                    infoPokemon={(poke) => setPokeDex(poke)}
                ></Card>
                <div className='btn-group'>
                    {prevUrl && (
                        <button
                            onClick={() => {
                                setPokeDat([]);
                                setUrl(prevUrl);
                            }}
                        >
                            Previous
                        </button>
                    )}
                    <button
                        onClick={() => {
                            setPokeDat([]);
                            setUrl(nextUrl);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className='right-content'>
                <Pokeinfo data={pokeDex}></Pokeinfo>
            </div>
        </div>
    );
};

export default Main;
