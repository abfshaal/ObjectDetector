docker build -t objectdetectorfe -f Dockerfile_frontend .
docker build -t objectdetectorbe -f Dockerfile_backend .

docker-compose -f docker_compose.yml up 

