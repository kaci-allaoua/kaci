import React, { Component } from 'react'

export default class Git extends Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src="https://kinsta.com/fr/wp-content/uploads/sites/4/2019/03/git-1024x512.png" alt="Card image cap" height="300"></img>
                <div class="card-body">
                    <h4 class="card-text">Introduction</h4>
                    <h6 class="card-text"> just go here : https://en.wikipedia.org/wiki/Machine_learning lol</h6>
                    <a href="https://openclassrooms.com/fr/courses/5641721-utilisez-git-et-github-pour-vos-projets-de-developpement/6113016-installez-git-sur-votre-ordinateur" class="btn btn-info">Lien qui sert de guide pour l'instation.</a>
                    <p></p>
                    <h6>2) Type of ml</h6>
                    <p>👋 Supervised regoups : Classification(classifies labeled data) et Regression (Predicts trends using previous labled data), ici on peut avoir plus de méthodes et on peut parler d'environement controller</p>
                    <p>👏 Unsupervised learning : Clustring : (trouve les patterns et fait un regroupement d'unlabeled data. on peut parler d'environement moins controller</p>
                    <p></p>
                    <h6>Regression</h6>
                    <p>C'est la capacité à prédire des valeurs continues, automatiquement on devine le process var dep* et var ind*</p>
                    <p>On peut aussi subdiviser la regression en deux types : Simple (co2 vs engin size), Multiple (co2 + engineZe ...)</p>
                    <p>On l'utilse surtout pour : Sales forcasting + Satisfaction analysis + Price estimation + Employment income</p>
                    <p>Algo possible en regression : Ordinal,Poisson,Fast forest quantile,Linear..,Bayesian lineair,NeuralNetwork,Decision,Boosted decision, KNN </p>
                    <p></p>
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