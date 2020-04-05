import request from './http.client';

export class PostService {
  constructor() {
    this.loading = request().loading;
    this.error = request().error;
  }

  list(query = null) {
    return request.instance().get('/posts');
  }

  create(data) {
    return request.instance().post('/posts', data);
  }

  update(id, data) {
    return request.instance().put(`/posts/${id}`, data);
  }

  delete(id) {
    return request.instance().delete(`/posts/${id}`);
  }

  view(id) {
    return request.instance().get(`/posts/{id}`);
  }
}
