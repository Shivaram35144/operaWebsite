# To build docker image

- docker buildx create --use

- docker buildx build --platform linux/amd64,linux/arm64 \
  -t shivram35144/opera-static-1:latest \
  --push .

Log into ec2 - ssh -i opera-app.pem ec2-user@13.218.37.84

- docker pull shivram35144/opera-static-1:latest
- docker run -d -p 80:80 shivram35144/opera-static-1


# To remove old containers

```
docker ps -a   # to see running/stopped containers
docker stop <container-id>
docker rm <container-id>
docker rmi <image-id>
```