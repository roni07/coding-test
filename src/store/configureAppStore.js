import {configureStore} from "@reduxjs/toolkit";

import reducer from "./files";

export default function configureAppStore() {
    return configureStore({
        reducer
    });
}
