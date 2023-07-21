const allowUptateValidate = function (next) {
  this.options.runValidator = true;
  next();
};

export default allowUptateValidate;
