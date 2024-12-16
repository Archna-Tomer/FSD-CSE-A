import React, { createContext } from 'react';
import C1context from './contextcomponent/C1context';
import C2context from './contextcomponent/C2context';


const MyContext = createContext();

function AppContext() {
    const data = {
        name: 'Archna',
        branch: 'CSE',
    };

    return (
        <div>
            <MyContext.Provider value={data}>
                <C1context />
                <hr></hr>
                <C2context />
            </MyContext.Provider>
        </div>
    );
}

export {
    MyContext 
};

export default AppContext;
