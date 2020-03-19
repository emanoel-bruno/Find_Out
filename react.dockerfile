FROM archlinux

WORKDIR /var/www/html/front
COPY ./front /var/www/html/front

# Install dependencies
RUN pacman -Syy --noconfirm
RUN pacman -S --noconfirm nodejs yarn npm
RUN pacman -Scc --noconfirm
RUN rm -rf node_modules
RUN yarn install

CMD [ "yarn", "start" ]
