#!/bin/bash

. ./scripts/os.sh

export dockerHost=host.docker.internal

#######################################################
# Database Variables
#######################################################
export dbName=fosol
export dbUser=$("$GREP" -Po 'POSTGRES_USER=\K.*$' ./db/.env 2>/dev/null)
if [ -z "$dbUser" ]
then
    echo 'Enter a username for the database.'
    read -p 'Username: ' dbUser
    export dbUser
fi

export dbPassword=$("$GREP" -Po 'POSTGRES_PASSWORD=\K.*$' ./db/.env 2>/dev/null)
if [ -z "$dbPassword" ]
then
    # Generate a random password that satisfies password requirements.
    echo 'A password is randomly being generated.'
    dbPassword=$(date +%s | sha256sum | base64 | head -c 29)A8!
    echo "Your generated password is: $dbPassword"
    export dbPassword
fi

export defaultPassword=$("$GREP" -Po 'DEFAULT_PASSWORD=\K.*$' ./backend/libs/dal/.env 2>/dev/null)
if [ -z "$defaultPassword" ]
then
    echo 'Enter a default password for initial users.'
    read -p 'Password: ' defaultPassword
    export defaultPassword
fi

export privateKey=$("$GREP" -Po 'Authentication__PrivateKey=\K.*$' ./backend/api/.env 2>/dev/null)
if [ -z "$privateKey" ]
then
    privateKey=$(date +%s | sha256sum | base64 | head -c 32)
    export privateKey
fi
saltLength=50
export saltLength

#######################################################
# Docker Environment Variables
#######################################################
export portDb=$("$GREP" -Po 'DB_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portDb" ]
then
    portDb=30000
    export portDb
fi

export portApiHttp=$("$GREP" -Po 'API_HTTP_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portApiHttp" ]
then
    portApiHttp=30001
    export portApiHttp
fi
export portApiHttps=$("$GREP" -Po 'API_HTTPS_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portApiHttps" ]
then
    portApiHttps=30002
    export portApiHttps
fi

export portAppHttp=$("$GREP" -Po 'APP_HTTP_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portAppHttp" ]
then
    portAppHttp=30003
    export portAppHttp
fi
export portAppHttps=$("$GREP" -Po 'APP_HTTPS_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portAppHttps" ]
then
    portAppHttps=30004
    export portAppHttps
fi

export portNginxHttp=$("$GREP" -Po 'NGINX_HTTP_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portNginxHttp" ]
then
    portNginxHttp=30080
    export portNginxHttp
fi
export portNginxHttps=$("$GREP" -Po 'NGINX_HTTPS_PORT=\K.*$' ./.env 2>/dev/null)
if [ -z "$portNginxHttps" ]
then
    portNginxHttps=30443
    export portNginxHttps
fi
