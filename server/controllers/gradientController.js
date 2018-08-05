const Gradient = require('../models/gradients');

exports.index = (req, res) => {
  Gradient.find()
    .then(gradients => res.status(200).send(gradients))
    .catch(err => res.status(500).send(err));
};

exports.show = (req, res) => {
  Gradient.findById({
    _id: req.params.id,
  })
    .then(gradient => res.status(200).send(gradient))
    .catch(err => res.status(500).send(err));
};

exports.create = (req, res) => {
  Gradient.create({
    name: req.params.name,
    creator: req.params.creator,
    description: req.params.description,
    usecase: req.params.usecase,
    gradientSpecs: {
      colors: req.params.colors,
      direction: req.params.colors,
    },
  })
    .then(() => res.status(200).send({ message: 'Gradient Successfully Created!' }))
    .catch(err => res.status(500).send(err));
};

exports.update = (req, res) => {
  Gradient.update(
    {
      _id: req.params.id,
    },
    {
      name: req.params.name,
      creator: req.params.creator,
      description: req.params.description,
      usecase: req.params.usecase,
      gradientSpecs: {
        colors: req.params.colors,
        direction: req.params.colors,
      },
    },
  )
    .then(() => res.status(200).send({ message: 'Gradient Successfully Updated!' }))
    .catch(err => res.status(500).send(err));
};

exports.delete = (req, res) => {
  Gradient.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.status(200).send({ message: 'Gradient Successfully Deleted!' }))
    .catch(err => res.status(500).send(err));
};