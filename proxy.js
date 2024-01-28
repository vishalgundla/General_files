var obj = {
    name: "vishal",
    age: 24,
    address: {
        city: "delhi",
        state: "hyderabad"
    }
}

var proxy = new Proxy(obj,{
    get(target, key) {
        return key == "name" ? target[key].toUpperCase() : target[key];
    }
});

console.log("proxy.age", proxy.age);
console.log("proxy.name", proxy.name);
console.log("proxy.name", proxy.address);

console.log("obj.age", obj.age);
console.log("obj.name", obj.name);
console.log("obj.address", obj.address);