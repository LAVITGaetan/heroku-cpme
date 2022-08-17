const db = require('../models')

const Adherent = db.adherents

// create adherent
const addAdherent = async (req, res) => {

    let data = {
        entreprise: req.body.entreprise,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        identifiant: req.body.identifiant
    }

    let adherent = await Adherent.create(data)
    res.status(200).send({ adherent })

}

// get all adherents
const getAllAdherents = async (req, res) => {

    let adherents = await Adherent.findAll({})
    res.status(200).send(adherents)

}

// get single adherent
const getOneAdherent = async (req, res) => {

    let id = req.params.id;
    let adherent = await Adherent.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(adherent)

}

// update adherent
const updateAdherent = async (req, res) => {

    let id = req.params.id;
    let adherent = await Adherent.update(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send(adherent)

}

// delete adherent
const deleteAdherent = async (req, res) => {

    let id = req.params.id;
    let adherent = await Adherent.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send('Adherent was deleted with success')

}


// get published adherents
const publishedAdherent = async (req, res) => {

    let adherents = await Adherent.findAll({
        where: {
            published: true
        }
    })
    res.status(200).send(adherents)

}

module.exports = {
    addAdherent,
    getAllAdherents,
    getOneAdherent,
    updateAdherent,
    deleteAdherent,
    publishedAdherent
}