import constant from "../constant";

export default {
    [constant.CHANGE_NO] : (state, payload) => {
        state.no = payload.no * 1
    }
}
