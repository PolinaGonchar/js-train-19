// 1. Creating a basic object "Book":
/*
 * Object: Book
 * Properties:
 * ----------------------------------
 * | Property   | Value             |
 * |------------|-------------------|
 * | title      | "Generic Book"    |
 * | author     | "Anonymous"       |
 * | pages      | 0                 |
 *
 * Functions:
 * -------------------------------------------------------------------------
 * | Function   | Description                                              |
 * -------------------------------------------------------------------------
 * | read()     | Outputs the message "You are reading <title> by <author>" |
 */

// Creating the Book object
let Book = {
    title: "Generic Book",
    author: "Anonymous",
    pages: 0,
    read: function () {
      console.log(`You are reading "${this.title}" by ${this.author}`);
    },
  };

  console.log("Task: 1 ==============================");

  // Outputting the Book object to the console
  console.log(Book);
  // Outputting the prototype of the Book object
  console.log(Book.hasOwnProperty("title"));
  // Using the read function of the Book object
  Book.read();

  // 2. Inheriting from the base object Book

  /*
   * Object: Novel
   * Properties and functions are inherited from the Book object
   * Adding a new property
   *  | Property   | Value  |
   *  |------------|--------|
   *  | genre      | "Novel"|
   */

  // Creating the Novel object, inheriting properties and functions from the Book object
  let Novel = Object.create(Book);
  // Adding the genre property
  Novel.genre = "Novel";
  console.log("Task: 2 ==============================");

  // Outputting the Novel object to the console
  console.log(Novel);
  // Outputting the prototype of the Novel object
  console.log(Object.getPrototypeOf(Novel));

  // 3. Creating a new object and changing its prototype

  /*
   * Object: Biography
   * Properties:
   * --------------------------------------
   * | Property   | Value                |
   * |------------|----------------------|
   * | title      | "Generic Biography"  |
   * | author     | "Biographer"         |
   * | pages      | 200                  |
   */
  // Creating the Biography object
  let Biography = {
    title: "Generic Biography",
    author: "Biographer",
    pages: 200,
  };
  // Changing the prototype of the Biography object to Novel
  Object.setPrototypeOf(Biography, Novel);

  console.log("Task: 3 ==============================");
  // Outputting the Biography object to the console
  console.log(Biography);
  // Checking if Novel is the prototype of Biography and outputting it to the console
  console.log(Novel.isPrototypeOf(Biography));

  // 4. Encapsulation of property and adding a property
  /*
   * Object: ScienceBook
   * Properties and functions are inherited from the Book object
   * Here, encapsulation is also used to create the 'info' property, which cannot be directly changed but can only be modified via a setter
   */

  // Creating the ScienceBook object, inheriting properties and functions from the Book object
  let ScienceBook = Object.create(Book);

  // Adding the 'info' property using Object.defineProperty
  Object.defineProperty(ScienceBook, "info", {
    configurable: false,
    // Make 'info' non-deletable and non-changeable, check and try to assign it any value (this should be done outside of defineProperty),
    // We will get an error: Cannot assign to read only property 'info' of object '#<Object>'
    // Then we create a setter that assigns the 'info' property the value it receives when called, we no longer get the error but when trying to output the 'info' value, we get undefined
    set(value) {
      this._info = value;
    },
    // Create a getter that will return the string: About the book <title>: <info>
    // Now everything outputs correctly
    get() {
      return `About the book ${this.title}: ${this._info}`;
    },
  });

  // Filling the object
  // | Property   | Value                |
  // |------------|----------------------|
  // | title      | "Physics 101"        |
  // | author     | "Albert Einstein"    |
  // | info       | written in 1915      |

  ScienceBook.title = "Physics 101";
  ScienceBook.author = "Albert Einstein";
  ScienceBook.info = "written in 1915";

  console.log("Task: 4 ==============================");
  // Outputting the 'info' property to the console
  console.log(ScienceBook.info);
  // Outputting the configuration of the 'info' property
  console.log(Object.getOwnPropertyDescriptor(ScienceBook, "info"));

  // 5. Polymorphism: creating a new object and overriding its method
  /*
   * Object: Textbook
   * Properties and functions are inherited from the ScienceBook object
   * The read() method is overridden to demonstrate polymorphism,
   * it should output "You are reading the textbook "<title>" by <author>. <info>"
   */

  // Creating the Textbook object and inheriting properties from ScienceBook
  let Textbook = Object.create(ScienceBook);
  // Overriding the read() method, as described above
  Textbook.read = function () {
    console.log(
      `You are reading the textbook "${this.title}" by ${this.author}. ${this.info}`
    );
  };

  // Setting values for Textbook
  // | Property   | Value                       |
  // |------------|-----------------------------|
  // | title      | "Physics in High School"     |
  // | author     | "J. D. Jones"               |
  Textbook.title = "Physics in High School";
  Textbook.author = "J. D. Jones";

  console.log("Task: 5 ==============================");
  // Running the read() function
  Textbook.read();

  // 6. Abstraction: creating an object with general properties
  /*
   * Object: Media
   * Properties:
   * --------------
   * | Property   | Value               |
   * |------------|---------------------|
   * | format     | "Generic Format"    |
   * | length     | 0                   |
   *
   * Functions:
   * ----------------------------------------------------------------------------------------------------------------
   * | Function   | Description                                                                                     |
   * ----------------------------------------------------------------------------------------------------------------|
   * | play()     | Outputs the message "Now playing media in <format> format with a length of <length> seconds"     |
   */
  // Creating the Media object
  let Media = {
    format: "Generic Format",
    length: 0,
    play: function () {
      console.log(
        `Now playing media in ${this.format} format with a length of ${this.length} seconds`
      );
    },
  };
  /*
   * Object: Song
   * Properties and functions are inherited from the Media object
   * Additional properties: artist, title
   */
  // Creating the Song object
  let Song = Object.create(Media);
  // Setting additional properties
  // | Property   | Value                  |
  // |------------|------------------------|
  // | artist     | "Generic Artist"       |
  // | title      | "Generic Song"         |
  Song.artist = "Generic Artist";
  Song.title = "Generic Song";
  console.log("Task: 6 ==============================");
  // Using the play() function
  Song.play();
