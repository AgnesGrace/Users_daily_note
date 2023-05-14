# Express API

This is a simple REST API using Express. This will be a users daily note API, so the data will be notes that people post.

We implemented `CRUD` functionality, which is create, read, update and delete.

First, we install Express. Let's initialize our project with a `package.json` file:

```bash
yarn init
```

Then we can install Express:

```bash
yarn add express
```

Now we can create a file called `index.js`. You can call it absolutely anything you want

Let's start by

- Importing Express
- Creating an instance of the `express` function
- Creating a route that responds to a `GET` request to the `/` path
- Listening on port 8000

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my world!')
})

const PORT = 8000

app.listen(5000, () => {
  console.log(`Server is listening on port ${PORT}`)
})
```

That is the starting point, but we are still going to connect to a database in this case, we use MongoDb

# Note

I am using webpack bundle which you can easily access the boilerplate from

```link
https://github.com/AgnesGrace/webpack_boilerplate
```
