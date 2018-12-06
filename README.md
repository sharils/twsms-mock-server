# TWSMS Mock Server

## Start Server

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
docker run --rm --publish 3000:3000 smutdose/twsms-mock-server
```
