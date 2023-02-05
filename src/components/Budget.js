import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, currency, budget, dispatch } = useContext(AppContext);
    // const [budget, setCost] = useState(2000);

    const validateEvent = () => {
        const maxBudget = 20000;
        if(budget > maxBudget ) {
            alert(`The value cannot exceed remaining funds  ${currency}`+maxBudget);
            //setCost(2000);
            return;
        }
    }

    const setCost = (props) => {
        dispatch({
            type:'SET_BUDGET',
            payload: props
        })

        if(budget < expenses) {
            alert(`The value cannot lower than spent funds  ${currency}`+expenses);
            // setCost(2000);
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget">Budget:{currency}</label>
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