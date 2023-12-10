var express = require('express');
var router = express.Router();
var Commande = require("../model/commande");

async function add(req, res, next) {
  try {
    const commande = new Commande(req.body);
    await commande.save();
    res.status(200).send('add success');
  } catch (err) {
    console.log(err);
  }
}

async function afficher(req, res, next) {
  try {
    const commandes = await Commande.find();
    res.status(200).json(commandes);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération des commandes');
  }
}

async function afficherid(req, res, next) {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) {
      return res.status(404).send('Commande non trouvée');
    }
    res.status(200).json(commande);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération de la commande');
  }
}

async function byname(req, res, next) {
  try {
    const commandeName = req.params.name;

    if (!commandeName) {
      return res.status(400).send('Le paramètre "name" est requis');
    }

    const commande = await Commande.findOne({ name: commandeName });

    if (!commande) {
      return res.status(404).send('Commande non trouvée');
    }

    res.status(200).json(commande);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la récupération de la commande par le nom');
  }
}

async function modifier(req, res, next) {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(commande);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la mise à jour de la commande');
  }
}

async function supprimer(req, res, next) {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) {
      return res.status(404).send('Commande non trouvée');
    }
    res.status(200).send('Commande supprimée avec succès');
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur lors de la suppression de la commande');
  }
}

module.exports = { afficher, add, afficherid, byname, modifier, supprimer };
