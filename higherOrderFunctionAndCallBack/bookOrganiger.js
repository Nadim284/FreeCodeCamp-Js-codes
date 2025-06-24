let books = [
  {
    title : "Atomic Habits",
    authorName : "James Clear",
    releaseYear : 2018
  },
  {
    title : "The Lean Startup",
    authorName : "Eric Ries" ,
    releaseYear : 1911
  },
  {
    title : "Zero to One",
    authorName : "Peter Thiel with Blake Masters",
    releaseYear : 2014
  }
];

function sortByYear(book1,book2){
  if(book1.releaseYear  < book2.releaseYear ) return -1;
  else if (book1.releaseYear  > book2.releaseYear ) return 1;
  else return 0;
}

const filteredBooks = books.filter((year) => year.releaseYear > 1950);

filteredBooks.sort(sortByYear); 
