import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskSlice";

const store = configureStore({
    reducer: {
        tasklist: taskSlice,
    }
});

export default store;