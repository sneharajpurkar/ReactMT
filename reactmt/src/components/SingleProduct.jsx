import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Home.css'

const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState();
    const data = useParams();

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

            .then((res) => res.json())
            .then((Json) => Json.drinks)
            .then((json) => json.filter((sneha) => sneha.idDrink === data.idDrink))
            .then((data) => setSingleProduct(data[0]));
    }, [])
    console.log(data.idDrink)
    return (
        <div>
            {singleProduct &&
                <div id='image'>
                    <img src={singleProduct.strDrinkThumb} alt='imagee' />
                    <h5>{singleProduct.strDrink}</h5>
                    <p>{singleProduct.idDrink}</p>
                </div>
            }
        </div>
    )
}

export default SingleProduct