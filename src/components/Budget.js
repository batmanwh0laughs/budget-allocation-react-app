import React, { useContext, useState } from 'react';
import { AppContext  } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining ,currency} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    }
    const handleKeyDown = (e) => {
        if ( e.key === 'Enter' && newBudget <= upperLimitValue) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed remaining funds  £"+remaining);   
        }
      };
      

    return (
        <div className="alert alert-secondary ">
            <label>Budget: {currency}</label>
            <input
                className='w-50 ms-1'
                required
                type="number"
                id="cost"
                step={10}
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyDown}
            />
    </div>

    );
};
export default Budget;

//In Budget.js you will be adding text and value for your budget. 
//You will be importing app context and the useContext hook, 
//and pass your AppContext to it - this is how a component connects to the context in order to get values from global state.

//In the above code snippet we are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget.
 //We are also defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.
//We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange 
//when the user changes the value of the input field.
//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.