const mongoose = require('mongoose');

const gradientValidators = [
  {
    validator: codes => codes.length() >= 1,
    msg: 'There Must be At Least Two Color Codes.',
  },
  {
    validator: codes => codes.every(
      code => (code !== undefined && typeof code === 'string'
        ? /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(code)
        : false),
    ),
    msg: 'Invalid Color Code Has Been Entered, Please Enter a Valid Hex Color Code.',
  },
];

const GradientSpecificationSchema = new mongoose.Schema({
  colors: {
    type: [String],
    default: ['#FFF', '#000'],
    validate: gradientValidators,
    required: 'Please Enter Some Colors.',
  },
  direction: {
    type: String,
    default: 'left',
    validate: {
      validator: direct => direct !== undefined
        && direct
          in {
            left: true,
            right: true,
            vertical: true,
          },
      message: 'Invalid Direction Entered, Please Use A Valid Direction',
    },
    required: 'Please Enter A Direction',
  },
});

const GradientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please Enter A Name For The Gradient',
  },
  creator: {
    type: String,
    required: 'Please Enter Identify Yourself, Great Creator!',
  },
  description: {
    type: String,
    required: 'Please Describe This Wonderful Creation.',
  },
  usecase: {
    type: String,
    required: 'What Should This Gradient Be Used For?',
  },
  gradientSpecs: GradientSpecificationSchema,
});

module.exports = mongoose.model('Gradient', GradientSchema);
