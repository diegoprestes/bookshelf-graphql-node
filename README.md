# bookshelf-graphql-node
Bookshelf app built with Node and Graphql

## 1. Requirements

- Built with Node `v14.15.5`

## 2. Query Examples

### 2.1 Book query
```
{
  book(id: "605c7349728cef9f55c2fef0"){
    id
    name
    genre
    author{
      name
      age
      books {
        name
      }
    }
	}
}
```

### 2.2 Author query
```
{
  author(id: "605c6fa9b109ea9d5c0a3118"){
    id
    name
    country
    image
    birthDate
    deathDate
    books{
      name
      genre
    }
	}
}
```

### 2.3 Books query
```
{
  books {
    id
    name
    genres {
      name
    }
    pages
    cover
    releaseDate
    author {
      name
    }
  }
}
```

### 2.4 Authors query
```
{
  authors{
    id
    name
    country
    image
    birthDate
    deathDate
    books{
      name
      genre
    }
	}
}
```

### 2.5 Genres query
```
{
  genres{
    id
    name
  }
}
```

## 3. Mutation Examples

### 3.1 Add Author
```
mutation {
  addAuthor(name: "Michael Crichton", country: "United States", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MichaelCrichton_2.jpg/440px-MichaelCrichton_2.jpg", birthDate: "1942-10-23T03:00:00.000Z", deathDate: "2008-11-04T03:00:00.000Z") {
    name
    country
    image
    birthDate
    deathDate
  }
}
```

### 3.2 Add Book
```
mutation {
  addBook(name: "book a", genres: ["605fa946bca81d41e7c9b274", "605fb54ff9972851dd7e0cc6"], pages: 200, cover: "a cover", releaseDate: "2020-10-02", authorId: "605f85df9b6565374fb7047d") {
    id
    name
    genres {
      name
    }
    pages
    cover
    releaseDate
    author {
      name
    }
  }
}
```

### 3.3 Add Genre
```
mutation {
  addGenre(name: "Fantasy"){
    id
    name
  }
}
```