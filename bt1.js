let person = {
    name: "Ngọc",
    age: "20",
    address: "678 - Lê Văn Lương",
};
console.log(person);


person.birthday = "21";
console.log("Sau khi thêm thuộc tính birthday", person);
delete person.age;
console.log("Sau khi xóa thuộc tính age", person);
