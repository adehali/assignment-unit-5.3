console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// Create an empty array called myCollection
let myCollection = [];

// Create a function named addToCollection
function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  // Create an object named 'album'
  let album = {
    title: title, 
    artist: artist, 
    yearPublished: yearPublished
  }; 
  // Adding a new object to the collection and return/call the new object
  collection.push(album); 
  return album; 
}


// Test the addToCollection function
console.log("Albums to my collections:"); 


addToCollection(myCollection, "No Woman, No Cry", "Bob Marley", 1974); 
addToCollection(myCollection, "Moody Blue", "Elvis Presley", 1976);
addToCollection(myCollection, "Billie Jean", "Michael Jackson", 1982); 
addToCollection(myCollection, "All Night Long", "	Lionel Richie", 1983); 
addToCollection(myCollection, "Thriller", "Michael Jackson", 1983); 
addToCollection(myCollection, "Don't Be Cruel", "Bobby Brown", 1988); 
addToCollection(myCollection, "I Will Always Love You", "Whitney Houston", 1992); 

console.log("My albums added:"); 

// While using the function's returned value, log each album that was added. 
myCollection.forEach(album => {
  console.log(album);

}); 

// Create a function named showCollection and loop the collection array. 
function showCollection(collection){
  for (let  album of collection) {
// As you building a single string format, log each album's stored value. 
    console.log(`${album.title} by ${album.artist}, Published in ${album.yearPublished}`); 

  }
}
// Test showCollection function. 
console.log("List of my collections:"); 
showCollection(myCollection); 

//Create a function named findByArtist
function findByArtist(collection, artist) {
  // Create an empty array that holds the results
  let results = []; 
  // Loop the collection array. 
  for (let  album of collection){
    // Checking if album's artist equal the given artist
    if (album.artist === artist){
      // Add the matching album to the results and then return the results. 
      results.push(album); 
    }
  }
  return results; 
}

// Test findByArtist function
console.log("Finding albums by Michael Jackson:");
console.log(findByArtist(myCollection, "Michael Jackson"));

console.log("Finding albums by Bob Marley:");
console.log(findByArtist(myCollection, "Bob Marley"));

console.log("Finding albums by an artist not in my list:('baby'):");
console.log(findByArtist(myCollection, "baby"));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
