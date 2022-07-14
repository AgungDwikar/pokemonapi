import React from 'react';

const Pokeinfo = ({ data }) => {
    console.log(data);
    return (
        <>
            {!data ? (
                ''
            ) : (
                <>
                    <div className='card-info'>
                        <h1>{data.name}</h1>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                            alt='poke'
                            style={{ width: '40%' }}
                        />
                        <div className='abilities'>
                            {data.abilities.map((poke) => {
                                return (
                                    <div className='group'>
                                        <h2 style={{ fontWeight:'300' }}>{poke.ability.name}</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <br/>
                        <div className='base-start'>
                            {data.stats.map((poke) => {
                                return (
                                    <>
                                        <div className='gabungan'>
                                            <div className='row1'>
                                                <h3
                                                    style={{
                                                        borderRadius: '8px',
                                                        color: 'black',
                                                        marginBottom: '4px',
                                                        fontWeight: '200',
                                                        fontSize: '15px',
                                                        padding: '6px',
                                                    }}
                                                >
                                                    {poke.stat.name}
                                                </h3>
                                            </div>
                                            <div className='row2'>
                                                <h3
                                                    style={{
                                                        borderRadius: '8px',
                                                        color: 'black',
                                                        marginBottom: '4px',
                                                        fontWeight: '200',
                                                        fontSize: '15px',
                                                        padding: '6px',
                                                    }}
                                                >
                                                    {poke.base_stat}
                                                </h3>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Pokeinfo;
