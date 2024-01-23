
class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Sách "${this.title}" cho mượn`);
    } else {
      console.log(`Sách "${this.title}" đã cho mượn`);
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`Sách "${this.title}" đã trả`);
    } else {
      console.log(`Sách "${this.title}" Có sẵn`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Sách "${book.title}" đã được thêm vào thư viện.`);
  }

  isBookAvailable(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (book.isAvailable) {
        console.log(`Sách "${book.title}" có sẵn`);
      } else {
        console.log(`Sách "${book.title}" đã cho mượn`);
      }
    } else {
      console.log(`Sách "${title}" không tồn tại trong thư viện.`);
    }
  }
}
const book1 = new Book("Hoa chanh", "Phan Thiết", 2020);
const book2 = new Book("Trùng khơi", "Ngọc Thanh", 2019);
const book3 = new Book("Kho gấm", "Tú Gầm", 2021);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

book1.borrow(); 
book1.borrow(); 

book1.returnBook(); 
book1.returnBook(); 

library.isBookAvailable("Sách 1");
library.isBookAvailable("Sách 2"); 
library.isBookAvailable("Sách 4"); 