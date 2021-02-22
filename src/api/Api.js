import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet("http://react.local/api/users").reply(200, {
    users: [
        {
            id: 1, name: "John Smith"
        },
        {
            id: 2, name: "Den Smith"
        },
        {
            id: 3, name: "Ivan Smith"
        }
    ],
});

const instance = axios.create({
    baseURL: 'http://react.local/api'
});

export const usersApi = {
    getUsers() {
        return instance.get('/users')
            .then(response => {
                return response.data
            })
    }
}
