const yup = require('yup');

module.exports = (req, res, next) => {
  const schema = yup.object({
    foodType: yup.string().required(),
    quantity: yup.number().integer().min(1).required(),
    beneficiary: yup.string().regex(/^[0-9a-fA-F]{24}$/).required() // Assuming beneficiary is a MongoDB ObjectId
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
