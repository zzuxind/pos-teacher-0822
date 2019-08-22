const db=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]
// ['0003','0003','0001']
function countProducts (codes) {
    let countedProduct=[];
    let map=new Map();
    codes.forEach(element => {
        if(!map.has(element)){
            map.set(element,{code:element,count:1});
        }else{
            let item=map.get(element);
            item.count++;
            map.set(element,item);
        }
    });
    // countProducts=[...map];
    map.forEach((value) => {
        countedProduct.push(value);
    })
    return countedProduct;
}

function fetchProduct(code,db){
    let product;
    for(let element in db){
        if(db[element].id == code){
            return db[element];
        }
    }
}


function generateReceiptItems(codes){
    let items=[];
    let counts=countProducts(codes);
    counts.forEach(element => {
        let item=fetchProduct(element.code,db);
        let count=element.count;
        items.push({
            name:item.name,
            price:item.price,
            count:element.count
        })
    });
    return items;
    console.log(items);
}
// [ 
//     { name: 'Pepsi-Cola', price: 5, count: 2 },
//     { name: 'Coca Cola', price: 3, count: 1 } 
// ];
function countTotalPrice(items){
    let totalPrice=0;
    items.forEach(element => {
        let onePrice=element.count*element.price;
        console.log(onePrice);
        totalPrice+=onePrice;
    });
    console.log(totalPrice);
    return totalPrice;
}

function assemble(items,totalPrice){
    let head="Receipts\n-----------------------------\n";
    let foot="-----------------------------\nPrice:"+totalPrice;
    let middle="";
    let assembleprint="";
    items.forEach(element => {
        middle+=element.name+"      "+element.price+"      "+element.count+"\n";
    });
    assembleprint=head+middle+foot;
    return assembleprint;
    console.log(assembleprint);
}
module.exports = {
    countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble
}