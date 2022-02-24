import httpService from "./http.service";

const commentAndpoint = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentAndpoint + payload._id,
            payload
        );
        return data;
    }
};
export default commentService;
