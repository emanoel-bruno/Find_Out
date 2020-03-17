FROM archlinux

WORKDIR /var/www/html/front
COPY ./front /var/www/html/front

# Install dependencies
RUN pacman -Syy --noconfirm
RUN pacman -S --noconfirm nodejs yarn npm
RUN pacman -Scc --noconfirm
RUN rm -rf node_modules
RUN yarn add react-md@next  @types/react-redux @types/react-router-dom
RUN yarn add --dev node-sass
RUN yarn upgrade --latest
RUN yarn install

CMD [ "yarn", "start" ]