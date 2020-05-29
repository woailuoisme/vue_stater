import request from './http.client';

class PostService {

  list(query = null) {
    return request.instance().get('/posts');
  }

  create(data = {}) {
    return request.instance().post('/posts', data);
  }

  update(id, data = {}) {
    return request.instance().put(`/posts/${id}`, data);
  }

  delete(id) {
    return request.instance().delete(`/posts/${id}`);
  }

  show(id) {
    return request.instance().get(`/posts/{id}`);
  }
}

export default new PostService();
