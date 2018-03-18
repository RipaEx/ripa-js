var Buffer = require("buffer/").Buffer;
var should = require("should");
var ripa = require("../index.js");

describe("Ripa JS", function () {

	it("should be ok", function () {
		(ripa).should.be.ok;
	});

	it("should be object", function () {
		(ripa).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(ripa).should.have.property(property);
		});
	});

});
