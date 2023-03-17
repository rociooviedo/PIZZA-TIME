import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pizza from "../components/Pizza";
import { getAllPizzas } from '../actions/PizzaAction'

export default function Home() {
    const dispatch = useDispatch()
    const pizzasState = useSelector((state) => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <div className="row justify-content-center">
                {loading ? (<h1>Cargando...</h1>) : error ? (<h1>Algo salió mal</h1>) : (
                    pizzas.map((pizza) => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                )}
            </div>
        </div>
    )
}