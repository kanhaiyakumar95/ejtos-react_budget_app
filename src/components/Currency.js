import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext)
    const setCurrency = (currency) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload: currency
        })
    }
    return (
        <select className="custom-select" id="inputGroupSelect03" onChange={(event) => setCurrency(event.target.value)}>
            <option value="$" name="dollor"> $ Dollar</option>
            <option value="£" name="Pound" defaultValue>£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    )
}

export default Currency