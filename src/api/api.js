import axios from "axios";

export default (auth = false) => {
    let currentUserString = window.localStorage.currentUser;
    let currentUser = currentUserString ? JSON.parse(currentUserString) : "";
    let headerWithAuth = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: currentUser && currentUser.token
    };
    let header = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };
    return axios.create({
        baseURL: "http://localhost:8000/api/v1",
        withCredentials: false,
        headers: auth ? headerWithAuth : header
    });
};
