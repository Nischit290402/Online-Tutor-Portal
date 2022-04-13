import React from 'react';
import Parent1 from './parent1';
import Courselist from './parent2';
import "./styles.css";
function Parent()
{
    return(
        <div>
            <Parent1/>
            <br></br>
            <Courselist/>
        </div>

    );

}
export default Parent;