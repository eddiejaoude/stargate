### Docker

### Run from GitHub Registry

```
docker run -p 3000:3000 -d ghcr.io/ediejaoude/stargate:latest
```

#### Build locally

```
docker build -t eddiejaoude/stargate .
```

#### Run from local build

```
docker run -p 3000:3000 -d eddiejaoude/stargate
```

#### Logs

To see the logs of your container

1. `docker ps`
1. `docker logs <container-id>`
