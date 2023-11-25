class Book {
  // Constructor method is called when a new instance of the class is created.
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  // Methods can be defined inside the class.
  getAvailability() {
    if (this.numCopies === 0) return "out of stock";
    if (this.numCopies < 10) return "low stock";
    else return "in stock";
  }

  sell(numCopies = 1) {
    if (this.numCopies < numCopies) {
      console.log("only ",this.numCopies, " available");
      return;
    }
   this.numCopies = this.numCopies - numCopies;
  }

  restock(numCopies = 5) {
    this.numCopies = this.numCopies + numCopies;
  }

  // getter
  get availability() {
    return this.getAvailability();
  }
}

// Creating an instance of the class.
const book = new Book("Fight Club", "Chuck Palahniuk", 9781784878542, 1);

// Calling a method on the instance.
book.restock(10);

console.log(book.availability); // in stock

book.sell(5); 

console.log(book.getAvailability()); // low stock

book.sell(7)

console.log(book.getAvailability()); // out of stock

/// 8 min