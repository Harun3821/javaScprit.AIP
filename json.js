 
 const Usger = {id: 1, name: 'harun amir', job: 'actor'};
//  javaScprit object notation (json)
   const stringdifed = JSON.stringify(Usger);

//  console.log(Usger)
//  console.log(stringdifed)



const Shop = {
    woner : 'harun',
    address : {
          villge : 'polladanga vholahat',
          ctiy: 'Rajshahi',
          country: "Bangladesh",
    },
    Pordects: ['laptop', 'mick', 'monitor', 'hedphon'],
    revenu: 46000,
    open: true,
    isNew: false,
}

console.log(Shop);
const ShopJosn = JSON.stringify(Shop);
console.log(ShopJosn);
const shopobj = JSON.parse(ShopJosn);
console.log(shopobj)