var expect  = require("chai").expect;
var request = require("request");

//Nothing will fail, but, at the same time, no expectation will be checked. This happens because we didn't give Mocha enough time to wait for the requests to finish. In other words, the code inside the request's callback is never actually executed.


describe("Color Code Converter API", function() {

  describe("RGB to Hex conversion", function() {

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    it("returns the color in hex", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
      });
    });

  });

  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    it("returns the color in RGB", function() {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
      });
    });
  });

});
