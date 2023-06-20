import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {dummyActions} from "../store/dummy/dummySlice";

const actions = {
    ...dummyActions,
}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
