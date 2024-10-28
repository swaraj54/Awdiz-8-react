const testObject = { name: "Awdiz", age: 10 };
const jsonObject = JSON.stringify(testObject);
console.log(jsonObject, "js to json converted object.");
const jsObject = JSON.parse(jsonObject);
console.log(jsObject, "JSON to js converted object.");
