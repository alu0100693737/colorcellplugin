const TextCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/textcell");
const UnderlinedCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/underlinedcell");
const RTextCell = require("../node_modules/@alu0100693737/oop-ale-ivan/src/rtextcell");
const StretchCell = require("../node_modules/@alu0100693737/oop-ale-ivan//src/stretchcell");
const DataTable = require("../node_modules/@alu0100693737/oop-ale-ivan/src/Tabla.js");
const ColorCell = require("../colorCell");

const input = require("../inputs/input.json");
const assert = require("assert");

describe("Chapter 6 - The Secret Life of Objects", () => {
  describe("ColorCell", () => {
    var str = {"params": ["Prueba ColorCell"]};
    let width = 12; let height = 2;
    let colorCell = new ColorCell(str, width, height);
    it("Expected that ColorCell exists", () => {
      assert.notEqual(colorCell, null);
    });
    it("repeat returns 'Prueba ColorCell' 3 times", () => {
      let result = colorCell.repeat("Prueba ColorCell ", 3);
      let expected = "Prueba ColorCell Prueba ColorCell Prueba ColorCell ";
      assert.equal(result, expected);
    });
    it("minHeight returns 1", () => {
      assert.equal(colorCell.minHeight, 1);
    });
    it("minHeight returns 1 with Prueba ColorCell\nPrueba ColorCell", () => {
      let newText = "Prueba ColorCell,\nPrueba ColorCell";
      colorCell.text = newText;
      assert.equal(colorCell.minHeight, newText.length);
    });
    it("ColorCell has 'color' and 'background' parameters", () => {
      assert.deepEqual(colorCell.color, "Red");
      assert.deepEqual(colorCell.background, "black");
    });
  });
});
