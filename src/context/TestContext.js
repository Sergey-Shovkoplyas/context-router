import React, {createContext} from 'react';

export const TestContext = createContext();

export const TestProvider = props => {
    const value = 'Value TestContext!';

    return (
        <TestContext.Provider value={value}>
            {props.children}
        </TestContext.Provider>
    )
}

