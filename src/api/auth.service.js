import request from './http.client';

class AuthService {
    signup(data) {
        return request.instance().post('/auth/signup', data);
    }

    signin(data) {
        console.log(data);
        return request.instance().post('/auth/login', data);
    }

    me() {
        return request.instance(true).get('/auth/me');
    }
}

export default new AuthService();
