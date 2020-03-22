# Imagem base
FROM php:7.4-fpm

# Configura diretorio de trabalho
WORKDIR /var/www/html/back/

RUN apt-get update && apt -y install lsb-release apt-utils wget apt-transport-https ca-certificates && wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" |  tee /etc/apt/sources.list.d/php.list

# Install dependencies
RUN apt-get update && apt-get -y install  build-essential iputils-ping software-properties-common ldap-utils \
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev unixodbc-dev libldap2-dev \
    locales telnet vim nano git curl libonig-dev libicu-dev\
    gnupg gnupg1 gnupg2 unzip zip jpegoptim optipng pngquant gifsicle

# Instala exteçoes PHP
RUN docker-php-ext-install pdo pdo_mysql mysqli exif pcntl bcmath intl
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/
RUN docker-php-ext-install gd

# Instala SQLSRV e XDEBUG
RUN pecl install sqlsrv pdo_sqlsrv xdebug
RUN docker-php-ext-enable pdo_sqlsrv sqlsrv xdebug

# LDAP
RUN docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/
RUN docker-php-ext-install ldap

# Instala PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Change current user to root
USER root

COPY ./back /var/www/html/back/

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
