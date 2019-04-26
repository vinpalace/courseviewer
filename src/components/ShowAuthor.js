import React from "react";

const ShowAuthor = props => {
<<<<<<< HEAD
=======
  console.log("showAuthor", props);
>>>>>>> Saving
  var authorId = props.authorId;
  var authors = props.authors;
  return <div>{getAuthorFromId(authorId, authors)}</div>;
};

function getAuthorFromId(authorId, authors) {
  if (authors.length === 0) {
    return "fetching..";
  }

  var authors = authors;
  var author = authors.find(function(authorObj) {
    return authorObj.id === authorId;
  });
<<<<<<< HEAD
  try {
    return author.name;
  } catch (TypeError) {
    return "not found";
  }
=======
  console.log("AUTHOR", author);
  return author.name;
>>>>>>> Saving
}

export default ShowAuthor;
