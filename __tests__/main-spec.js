const {countProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipts} = require('../main');
// const db=[
//     {"id": "0001", "name" : "Coca Cola", "price": 3},
//     {"id": "0002", "name" : "Diet Coke", "price": 4},
//     {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//     {"id": "0004", "name" : "Mountain Dew", "price": 6},
//     {"id": "0005", "name" : "Dr Pepper", "price": 7},
//     {"id": "0006", "name" : "Sprite", "price": 8},
//     {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//     {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//     {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//     {"id": "0010", "name" : "Fanta", "price": 12}
// ]

// it ('should count codes', () => {
//     const codes=['0003','0003','0001'];
//     const countedProducts=countProducts(codes);
//     expect(countedProducts[0].count).toBe(2);
// });

// it ('find product in db', () => {
//     //const codes=['0003','0003','0001'];
//     const code="0001";
//     const object=fetchProduct(code,db);
//    // console.log(object);
//     expect(object.price).toBe(3);
//     expect(object.name).toBe("Coca Cola");
// });

it("结果验证",()=>{
    //验证generateReceiptItems
    var codes=generateReceiptItems(['0003','0003','0001']);
    console.log("generateReceiptItems:",codes);

    //countTotalPrice
    const items=[ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    const totalPrice=countTotalPrice(items);
    console.log(totalPrice);

    //验证assemble
    var assembleInput =[{ name: 'Pepsi-Cola', price: 5, count: 2 },{ name: 'Coca Cola', price: 3, count: 1 }];
    var receiptText = assemble(assembleInput,13);
    console.log(receiptText);

    //验证generateReceipts
    const barcodes=['0001', '0003', '0005', '0003'];
    console.log(generateReceipts(barcodes));

})