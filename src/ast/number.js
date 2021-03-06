/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "number";

/**
 * Defines a numeric value
 * @constructor Number
 * @extends {Literal}
 */
const _Number = Literal.extends(function Number(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = _Number;
