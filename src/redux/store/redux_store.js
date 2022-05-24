import { createStore } from "redux";

export default function configureStore(initialstore){
    return(
        createStore(initialstore);
    )
}