import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setName(event.target.value)}>
                <option value="$" name="dollor" defaultValue> $ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
    </select>
}