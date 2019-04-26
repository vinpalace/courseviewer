import React from "react";

const ShowAuthor = props => {
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
  try {
    return author.name;
  } catch (TypeError) {
    return "not found";
  }
}

export default ShowAuthor;
