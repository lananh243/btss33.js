let phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function () {
            console.log("Tên: "+ this.name);
            console.log("Điện thoại: "+ this.phone);
            console.log("Email: "+ this.email);
            console.log("---------------");
        }
    },  
    contact2: {
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
        displayInfo: function () {
            console.log("Tên: "+ this.name);
            console.log("Điện thoại: "+ this.phone);
            console.log("Email: "+ this.email);
            console.log("---------------");
        }
    },
};
for(let index in phoneBook){
    phoneBook[index].displayInfo();
}
