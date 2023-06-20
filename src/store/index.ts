import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {dummyApi} from "./dummy/dummy.api";
import {dummyReducer} from "./dummy/dummySlice";

export const store = configureStore({
    reducer: {
        [dummyApi.reducerPath]: dummyApi.reducer,
        dummyApi: dummyReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;