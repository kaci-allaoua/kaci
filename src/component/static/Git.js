import React, { Component } from 'react'

export default class Git extends Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src="https://kinsta.com/fr/wp-content/uploads/sites/4/2019/03/git-1024x512.png" alt="Card image cap" height="300"></img>
                <div class="card-body">
                    <h4 class="card-text">Overview of git basics :</h4>
                    <h6 class="card-text">1) Installation de git et création d'un Gitub account</h6>
                    <a href="https://openclassrooms.com/fr/courses/5641721-utilisez-git-et-github-pour-vos-projets-de-developpement/6113016-installez-git-sur-votre-ordinateur" class="btn btn-info">Lien qui sert de guide pour l'instation.</a>
                    <p></p>
                    <h6>2) Commandes de base Git:</h6>
                    <p>👋 git remote add OC "link projet", cette commande permet de dire au dépôt que l’on pointe vers le dépôt distant.</p>
                    <p>👏 git clone "link projet", cette commande permet de dire au dépôt que l’on pointe vers le dépôt distant.</p>
                    <p></p>
                    <h6>3) Les Branches :</h6>
                    <p>La branche master représente la branche principale, un master chef utilise toujours des branches secondaires pour realiser les modifs.</p>
                    <p>Pour utiliser les branches nous avons :</p>
                    <p>🌓 git branch 👉🏻 renvoie la liste présente dans le projet.</p>
                    <p>🌒 git branch function 👉🏻 On souhaite crée la fonctionnalité function alors on crée la branche function.</p>
                    <p>🌑 git checkout function 👉🏻 on navigue sur la branche function (* pour distinguer sur quelle branche on est).</p>
                    <p></p>
                    <h6>4) Les commits :</h6>
                    <p> Un commit est tout simplement un enregistrement de votre travail à un instant T sur la branche courante où vous êtes. </p>
                    <p>👏 git commit -m “Réalisation de function :)”   </p>
                    <p></p>
                    <h6>5) Les push :</h6>
                    <p>La commande Git push permet d'Envoyer 🤙🏻, la commande Git pull permet de Recuperer 🤙🏻 le projet en local</p>
                </div>
            </div>
        )
    }
}