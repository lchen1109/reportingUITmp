import axios, {AxiosResponse} from 'axios'

const axiosApi = axios.create({
    baseURL: `/api`,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export default {
    hello(): Promise<AxiosResponse<string>> {
        return axiosApi.get(`/hello`);
    },
    getUser(userId: number): Promise<AxiosResponse<User>> {
        return axiosApi.get(`/user/` + userId);
    },
    createUser(firstName: string, lastName: string): Promise<AxiosResponse<number>> {
        return axiosApi.post(`/user/` + firstName + '/' + lastName);
    },
    getSecured(user: string, password: string): Promise<AxiosResponse<string>> {
        return axiosApi.get(`/secured/`,{
            auth: {
                username: user,
                password: password
            }});
    },
    reportingApiCall(): Promise<AxiosResponse<string>> {
        //return axiosApi.get(`/reporting`, {timeout: 55000});

        //var jsonResult = {"result":[["Fri, 13 May 2022 00:00:00 GMT",45],["Thu, 12 May 2022 00:00:00 GMT",847],["Wed, 11 May 2022 00:00:00 GMT",7554],["Tue, 10 May 2022 00:00:00 GMT",13068],["Mon, 09 May 2022 00:00:00 GMT",3205],["Sun, 08 May 2022 00:00:00 GMT",105],["Sat, 07 May 2022 00:00:00 GMT",202],["Fri, 06 May 2022 00:00:00 GMT",1745]]};
        return axiosApi.get(`http://reporting.service.qa11-dev1-jfk.dev1.jfk.shapeways.net/api/inshape/netsales?manufacturerId=13&materialFamilyIds=1`, {timeout: 15000});
       //return axiosApi.get('http://reporting.service.qa11-dev1-jfk.dev1.jfk.shapeways.net/status');
    },
}

