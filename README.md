```bash
# TEST FOR TERMINAL
docker run -t -d -p 1234:1234 --name myubuntu ubuntu

docker exec -it myubuntu bash

apt update

apt install nano bash mc curl nodejs npm -y

curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh

bash install_nvm.sh

source ~/.nvm/nvm.sh

nvm install 18  

nvm use 18
```

### Commands 

```bash
# build - docker-compose build
make build

# start - docker-compose up
make up

# down - docker-compose dowm
make down

# bash - docker exec -it webapp /bin/zsh
make bash 
```


