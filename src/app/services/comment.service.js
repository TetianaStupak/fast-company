import httpService from "./http.service";

const commentAndpoint = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentAndpoint + payload._id,
            payload
        );
        return data;
    },
    getComments: async (pageId) => {
        const { data } = await httpService.get(
            commentAndpoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        }
        );
        return data;
    }
};
export default commentService;
