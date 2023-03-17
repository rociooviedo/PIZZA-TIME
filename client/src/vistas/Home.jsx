import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pizza from "../components/Pizza";
import { getAllPizzas } from '../actions/PizzaAction'
import Loading from "../components/loading";
import Error from "../components/error";

export default function Home() {
    const dispatch = useDispatch()
    const pizzasState = useSelector((state) => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <h1>SABORES DE PIZZA!</h1>
            <div className="row justify-content-center">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='Something went wrong' />
                ) : (
                    pizzas.map((pizza) => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                )}
            </div>
            <h1>OTROS!</h1>
        </div>
    )
}