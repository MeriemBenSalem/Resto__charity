const yup = require("yup");

const ValidInfo = async (req, res, next) => {

  try {

    const Schema = yup.object().shape({
     
      nom          : yup.string().required(),
      prenom       : yup.string().required(),
      date         : yup.date().required(), 
      adresse      : yup.string().required(),
      numero_tel: yup
      .string()
      .required ("Numero du Tel Requics")
      .matches(/^\d{8}$/, 'Phone number should have 8 digits'),
      mot_de_passe: yup
      .string()
      .required("Le mot de passe est requis.")
      .matches("/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/",
                "Le mot de passe doit contenir au moins un caractère spécial."),
      
});

    res.status(200).json({ message: "Validation successful" });    

    await Schema.validate(req.body);
    next();

  } catch (err) {
    console.log(err);

  }
};

module.exports = ValidInfo;
