const Token = artifacts.require("Ladycontract");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
