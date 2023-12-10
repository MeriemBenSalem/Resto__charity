// platController.js
var express = require('express');
var router = express.Router();
var Plat = require("../model/plat");

async function add(req, res, next) {
  try {
    const plat = new Plat(req.body);
    await plat.save();
    res.status(200).send('add success');
  } catch (err) {
    console.log(err);
  }
}

async function afficher(req, res, next) {
  try {
    const plats = await Plat.find();
    res.status(200).json(plats);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération des plats');
  }
}

async function afficherid(req, res, next) {
  try {
    const plat = await Plat.findById(req.params.id);
    if (!plat) {
      return res.status(404).send('Plat non trouvé');
    }
    res.status(200).json(plat);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération du plat');
  }
}

async function byname(req, res, next) {
  try {
    const platName = req.params.name;

    if (!platName) {
      return res.status(400).send('Le paramètre "name" est requis');
    }

    const plat = await Plat.findOne({ name: platName });

    if (!plat) {
      return res.status(404).send('Plat non trouvé');
    }

    res.status(200).json(plat);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération du plat par le nom');
  }
}

async function modifier(req, res, next) {
  try {
    const plat = await Plat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(plat);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la mise à jour du plat');
  }
}

async function supprimer(req, res, next) {
  try {
    const plat = await Plat.findByIdAndDelete(req.params.id);
    if (!plat) {
      return res.status(404).send('Plat non trouvé');
    }
    res.status(200).send('Plat supprimé avec succès');
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la suppression du plat');
  }
}

module.exports = { afficher, add, afficherid, byname, modifier, supprimer };
