var nlp = require('compromise')
nlp.extend(require('compromise-numbers'))

var t = nlp('dinasour').nouns().toPlural()
console.log(t.text())

// .match() - Match text
let doc = nlp('i went on a talk')
let m = doc.match('. walk', { fuzzy: 0.7 })

console.log(m.text())

// .verbs() - conjugate and negate verbs in any tense:

let verb = nlp('she sells seashells by the seashore.')
verb.verbs().toPastTense()
console.log(verb.text())

// .nouns() - Play between plural. singular and possesive form 

let newNoun = nlp('the yellow car')
newNoun.nouns().toPlural()
console.log(newNoun.text());

// .numbers()
let myNum = nlp('one hundred twenty two')
myNum.numbers().add(2)
console.log(myNum.text())
// 'one hundred twenty two four'