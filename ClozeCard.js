function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.text = text;
    this.partial = function partialText(text, cloze) {
        if (text.includes(cloze)) {
            return text.replace(cloze, "......");
        } else {
            console.log("Sorry, try again!")
        }

    }
}

module.exports = ClozeCard;
