const TextCell = require("./node_modules/@alu0100693737/oop-ale-ivan/src/textcell.js");
const chalk = require("chalk");

class ColorCell extends TextCell {
  constructor(text, colors) {
    if(text instanceof  Object) {
      super(text.text);
    } else {
      super(text);
    }
      this.color = colors["c"] || 'Red';
      this.background = colors["bg"] || 'black';

      console.log(super.text);
  }


  draw(width, height) {
    //Pintamos con chalk
    return super.draw(width, height).map(str => chalk.keyword(this.color)(chalk.bgKeyword(this.background)(str)));
  }
}
//const { addMapClass, findClass } = require("./registry-class");
const {addMapClass, findClass} = require("./node_modules/@alu0100693737/oop-ale-ivan/src/registry-class");
addMapClass("ColorCell", ColorCell);
module.exports = ColorCell
