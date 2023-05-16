import React, { useState, useEffect } from 'react';
import './Home.css'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState();
    const route = useNavigate();

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(res => res.json())
            .then(json => setData(json.drinks));
    }, []);

    console.log(data, "data")

    function addToCart(e) {
        
    }

    return (

        <>
            <div id='homepage'>
                <div><h2>Products</h2></div>
                <div id='products'>
                {data && data.map((e) => (
                    <div>
                        <img src={e.strDrinkThumb} alt='image' onClick={() => route(`/home/${e.idDrink}`)}/>
                        <h5>{e.strDrink}</h5>
                        <p>{e.idDrink}</p>
                        <button onClick={addToCart(e)}>Add To Cart</button>
                    </div>
                ))}
                </div>
            </div>
        
        </>
    )
}

export default Home