# Projecte final d'M5

[![CI/CD](https://github.com/TheMineWayEstudis/M5-s-final-project-website/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/TheMineWayEstudis/M5-s-final-project-website/actions/workflows/node.js.yml)

Aquest és el projecte final de l'assignatura d'M5. A la pàgina web s'escullen uns components per muntar un ordinador i com muntar-lo. Es realitza un estudi de mercat realitzant comparacions entre els diferents components. També s'analitzen les necessitats del l'usuari final. Finalment, trobem un pressupost on es mostren tots els elemnts que s'ha  d'adquirir (components, eines, etc).

## Llicència
Aquest projecte és completament Open Source. Podeu fer servir aquest codi per desenvolupar solucions (tant pel vostre treball d'M5 com per a altres projectes). No cal mencionar-me ni a mi ni a aquest repositori.
Ara bé, si el vostre treball té els mateixos components i explicacions potser se n'adonen i us diuen alguna cosa...

## Com compilo el treball?
Necessiteu Noode.js instal·lat al vostre sistema. Un cop el tingueu instal·lat, executeu ```npm install``` *dins de web-m5*. FInalment, executeu ```npm run build```.
És molt probable que us doni un error. Heu d'accedir al fitxer *package.json* i esborrar la linea de *"homepage": "https://theminewayestudis.github.io/M5-s-final-project-website"* i modificar la linea *"build": "CI=false && react-scripts build"* => *"build": "react-scripts build"* (esborrem el *CI=false &&* ).

## Com visualitzo el treball?
Al tractar-se d'una SPA (Single Page Application) desenvolupada amb React no podeu obrir l'index.hml i esperar que funcioni, és molt probable que calgui fer servir un hosting (local o al núvol). Podeu fer servir per exemple Xampp (heu de copiar el contingut de build a htdocs).
