const yup = require('yup');

module.exports = (req, res, next) => {
  const schema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    contact: yup.string().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
