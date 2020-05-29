import client from './http.client';

class AuthService {
    static login(data = {}) {
        return client.instance().post('/auth/login', {
            email: data.email,
            password: data.password
        });
    }

    static register(data = {}) {
        return client.instance().post('/auth/register', {
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        });
    }

    static me() {
        return client.instance(true).get('/auth/me');
    }
}

export default AuthService;
