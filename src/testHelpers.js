import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import { render} from "react-testing-library";

import { reducer } from "./reducers";

export const closedStore = {
    closed: true
}

export const openStore = {
    closed: false
}

export const lockedStore = {
    locked: true
}

export const unlockedStore = {
    locked: false
}

export const renderWithRedux = (ui, state) => {
    const store = createStore(reducer, state);
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
}