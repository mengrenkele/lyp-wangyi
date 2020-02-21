import {
    SAVE_OTHERDATAS
} from './state_type'

export default {
    [SAVE_OTHERDATAS](state, otherdatas) { //保存断货补单王数据
        state.otherdatas = otherdatas
    }
}