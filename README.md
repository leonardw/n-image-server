# n-image-server

A very simple image server that serves only images of numbers, given a matching REST URL.

A custom delay may be added to the REST URL to throttle response.

## Why?
Created originally for testing image loading algorithms.

## Usage
Serving image after a default delay (of 1 second)

http://localhost:8000/img/n/`any number`

e.g.:
```
http://localhost:8000/img/n/123456
```


Wait until a certain time (in milliseconds) has elapsed before serving image

http://localhost:8000/img/delay/`delay in ms`/n/`any number`

e.g. wait 2 seconds:
```
http://localhost:8000/img/delay/2000/n/1001
```
