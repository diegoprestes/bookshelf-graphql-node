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
    age
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
  books{
    id
    name
    genre
    author{
      name
      age
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
    age
    books{
      name
      genre
    }
	}
}
```

## 3. Mutation Examples

### 3.1 Add Author
```
mutation {
  addAuthor(name: "Terry Pratchett", age: 66) {
    name
    age
  }
}
```

### 3.2 Add Book
```
mutation {
  addBook(name: "The Long Earth", genre: "Sci-Fi", authorId: "605c6fa9b109ea9d5c0a3118") {
    name
    genre
  }
}
```