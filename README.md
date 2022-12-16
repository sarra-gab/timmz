# timmz
# A quoi sert?

Compteur du temps écoulée dans exécution d'un projet la première fonction "timespent" est un compteur basé sur l'horodatage qui permet d'enregistrer le temps écoulé entre l'ouverture du serveur et sa fermeture ensuite il enregistre le temps dans un fichier  .
  "timer" est un compteur classique qui démarre lors d'ouvertures du serveur et affiche dans le terminal le temps en fonction des secondes.

# Installation 

npm i timmz

# usage
> require 

const timmz = require('timmz');


# API 

> constructeur

const timmz = new timmz();

> start 

timmz.timeSpent(); // pour enregister dans un fichier

timmz.timer(); // affichage dans la console
