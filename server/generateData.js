var faker = require('faker');

var database = { product: [] };

for (var i = 0; i <= 300; i++) {
    database.product.push({
        id: 1,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?product",
        quantity: faker.random.number()
    });
}

console.log(JSON.stringify(database));