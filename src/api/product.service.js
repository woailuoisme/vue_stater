import client from "./http.client";

class ProductService {

    static QUERY_ALL = 0;
    static QUERY_NEWEST = 1;
    static QUERY_HOT = 2;
    static QUERY_RECOMMEND = 3;

    static getProducts(type = this.QUERY_ALL, page = 1, perPage = 3) {
        const params = {
            type: this.QUERY_ALL,
            page,
            perPage
        };
        return client.instance().get('/products', {params});
    }

    static getProduct(id) {
        return client.instance().get(`/products/${id}`);
    }


    list(query = null) {
        return client.instance().get('/admin/products');
    }

    create(data = {}) {
        return client.instance().post('/admin/products', data);
    }

    update(id, data = {}) {
        return client.instance().put(`/admin//products/${id}`, data);
    }

    delete(id) {
        return client.instance().delete(`/admin/products/${id}`);
    }

    show(id) {
        return client.instance().get(`/admin/products/{id}`);
    }
}

export default ProductService;
