# Imagem base
FROM php:fpm

# Configura diretorio de trabalho
WORKDIR /var/www/html/back/

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential apt-utils iputils-ping software-properties-common ldap-utils\
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev unixodbc-dev libldap2-dev\
    locales telnet wget vim nano git curl libonig-dev\
    gnupg gnupg1 gnupg2 unzip zip jpegoptim optipng pngquant gifsicle


# Instala exteçoes PHP
RUN docker-php-ext-install pdo pdo_mysql mysqli exif pcntl bcmath
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