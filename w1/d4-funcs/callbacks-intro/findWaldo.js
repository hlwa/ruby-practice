// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) => {
  names.forEach(name => {
    if (name === "Waldo") {
      found(names.indexOf(name));
    }
  });
};

const actionWhenFound = ind => console.log(`At index ${ind} found Waldo`);

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


/*
Modify the callback function so that it accepts a single argument index and logs it.
output something like "Found Waldo at index 2!".
Copy the waldo searching code above into the JS file
Run it via terminal to make sure that it is working as expected
Modify the actionWhenFound function to let it receive and use the index
Modify the findWaldo function so that it passes the index array to the callback
*/