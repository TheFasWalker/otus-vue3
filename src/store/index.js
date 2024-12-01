import { createStore } from "vuex";
import basket from "./basket";
import user from "./user";

export default createStore({
    modules:{
        basket,
        user
    }
})