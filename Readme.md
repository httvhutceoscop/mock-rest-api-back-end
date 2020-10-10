## Rest API
- `GET /products` for getting the products,
- `GET /products/<id>` for getting a single product by id,
- `POST /products` for creating a new product,
- `PUT /products/<id>` for updating a product by id,
- `PATCH /products/<id>` for partially updating a product by id,
- `DELETE /products/<id>` for deleting a product by id.

You can make use of the `_page` and `_limit` parameters to retrieve pages of data. In the `Link` header of the HTTP response you'll have the `first`, `prev`, `next` and `last` links.

## Ref
- https://www.techiediaries.com/angular-mock-backend/