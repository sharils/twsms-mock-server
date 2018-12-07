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
docker run --rm --publish 3001:3001 smutdose/twsms-mock-server
```
