import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses } = useContext(AppContext);
    const [budget, setCost] = useState(2000);

    const validateEvent = () => {
        if(budget > 20000) {
            alert("The value cannot exceed remaining funds  £"+20000);
            setCost(2000);
            return;
        }

        if(budget < expenses) {
            alert("The value cannot lower than spent funds  £"+expenses);
            setCost(2000);
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget">Budget:£</label>
            <input
                required='required'
                type='number'
                id='budget'
                validate={validateEvent()}
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setCost(event.target.value)}
                >
            </input> 
        </div>
    );
};

export default Budget;