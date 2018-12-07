# TWSMS Mock Server

## Usage

First start the server.

Now post a message to it.

```sh
curl -XPOST 'http://0.0.0.0:3001/?mobile=0987654321&message=1234'
```

You should see the URL logged to the console output. For example:

```
POST /?mobile=0987654321&message=1234
```

In case for whatever reason, you lost the log. You can retrieve the URL of the
last POST request by sending a GET request. For example:

```sh
curl http://0.0.0.0:3001/
```

You should see the URL of the last POST request encoded as a JSON string. For
example:

```sh
"/?mobile=0987654321&message=1234"
```

## Start Server

It starts a server at `http://0.0.0.0:3001/`. 3001 is chosen to avoid conflict
as it's unlikely that this mock server is used along.

```sh
npm start
```

## Test

```sh
npm test
```

## Docker

Build a local image. (optional)

```sh
docker build --tag smutdose/twsms-mock-server .
```

Start a dockerised server.

```sh
docker run --rm --publish 3001:3001 smutdose/twsms-mock-server
```
