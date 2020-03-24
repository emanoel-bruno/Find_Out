# Imagem base
FROM php:7.4-fpm
LABEL Name="Laravel"
LABEL Version="7.0"

# Configura diretorio de trabalho
WORKDIR /var/www/html/back/

RUN apt update && apt -y install lsb-release apt-utils wget apt-transport-https ca-certificates && wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" |  tee /etc/apt/sources.list.d/php.list

# Install dependencies
RUN apt update && apt -y install  build-essential iputils-ping software-properties-common ldap-utils \
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev unixodbc-dev libldap2-dev \
    locales telnet vim nano git curl libonig-dev libicu-dev\
    gnupg gnupg1 gnupg2 unzip zip jpegoptim optipng pngquant gifsicle


ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/
RUN chmod uga+x /usr/local/bin/install-php-extensions && sync

RUN install-php-extensions bcmath
RUN install-php-extensions exif
RUN install-php-extensions gd
RUN install-php-extensions intl
RUN install-php-extensions ldap
RUN install-php-extensions mysqli
RUN install-php-extensions openssl
RUN install-php-extensions pcntl
RUN install-php-extensions pdo
RUN install-php-extensions pdo_mysql
RUN install-php-extensions pdo_sqlsrv
RUN install-php-extensions sqlsrv
RUN install-php-extensions xdebug

# Instala PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Clear cache
RUN apt clean && rm -rf /var/lib/apt/lists/*

# Change current user to root
USER root

COPY ./back /var/www/html/back/

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
