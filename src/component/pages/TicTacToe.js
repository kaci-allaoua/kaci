import React, { Component } from 'react'

export default class TicTacToe extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Photo comparator</h5>
                                <p class="card-text">Affichage des caractéristiques d'appareil photo après extraction des données de plusieurs site internet, avec possiblité de telechargement de fiche produit</p>
                                <a href="/photoComparator" class="btn btn-info">Visiter cette section :)</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Project in ionic et angular</h5>
                                <p class="card-text">Angular et typeScript avec un design modern, one line code avec un design modern pour etre dans l'air du temps</p>
                                <a href="#" class="btn btn-info">Démo et code source par ici :)</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Tic Tac Toe</h5>
                                <p class="card-text">Mini jeu</p>
                                <a href="/ticTac" class="btn btn-info">Click ici pour jouer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
