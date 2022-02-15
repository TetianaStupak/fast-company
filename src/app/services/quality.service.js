import httpService from "./http.service";

const qualityAndpoint = "quality/";

const qualityService = {
    fetchAll: async () => {
        const { data } = await httpService
            .get(qualityAndpoint);
        return data;
    }
};
export default qualityService;
