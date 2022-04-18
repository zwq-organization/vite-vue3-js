import axios from "../http/request";


/**
 * 获取数量
 * @param data
 * @return {Promise}
 */
export const getAllCount = (data) => {
    return axios({
        url: "/",
        method: "get",
        data,
        config: {},
    })
};
