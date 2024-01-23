
function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  Book.prototype.displayInfo = function() {
    console.log("Tiêu đề: " + this.title);
    console.log("Tác giả: " + this.author);
    console.log("Năm xuất bản: " + this.publishedYear);
    console.log("----------------------");
  };
  function Library() {
    this.books = [];
  }
  Library.prototype.addBook = function(book) {
    this.books.push(book);
  };
  Library.prototype.displayBooks = function() {
    for (var i = 0; i < this.books.length; i++) {
      console.log("Thông tin sách " + (i + 1) + ":");
      this.books[i].displayInfo();
    }
  };
  var library = new Library();
  var book1 = new Book("Sách Hoa hồng trắng", "Lý Mạc Sầu", 2020);
  var book2 = new Book("Sách Lương điền", "Vũ Trọng Phụng", 2018);
  var book3 = new Book("Sách Như ý truyện", "Tiểu Thiển", 2022);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  library.displayBooks();