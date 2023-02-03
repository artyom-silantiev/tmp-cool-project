## deploy project for development

```sh
cp .env.default .env
docker-compose -f docker-compose.dev.yml up -d
```

## deploy project for production

```sh
cp .env.default .env
nano .env

cp docker-compose.prod-default.yml docker-compose.yml
nano docker-compose.prod.yml

docker-compose up -d
```
