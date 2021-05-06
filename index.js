var nlp = require('compromise')
nlp.extend(require('compromise-numbers'))

var t = nlp('dinasour').nouns().toPlural()
console.log(t.text())

// .match() - Match text
let doc = nlp('i went on a talk, i walk')
let m = doc.match('. walk', { fuzzy: 0.7 })

console.log(m.text())

let ex = nlp("You are Ankita Patel").match('#FirstName @isTitleCase').text()
console.log(ex);

let exGirlFriend = nlp("You are Sapna Chauhan").match('#LastName @isTitleCase')
console.log(exGirlFriend.text());

// named capture
let named = nlp('first, turn left and enter the tunnel').match('turn [<direction>(left|right|up|down)]', 'direction').text()
console.log(named); // return left

// .verbs() - conjugate and negate verbs in any tense:

let verb = nlp('she sells seashells by the seashore.')
verb.verbs().toPastTense() // Convert sentence to past tense
console.log(verb.text())

// Future tense
let example = nlp('I sell some gadgets to him.')
example.verbs().toFutureTense()
console.log(example.text());

let ex2 = nlp('I tell her one joke.')
ex2.verbs().toFutureTense()
console.log(ex2.text());

// .nouns() - Play between plural. singular and possesive form 

let newNoun = nlp('the yellow car')
newNoun.nouns().toPlural()
console.log(newNoun.text());

let roses = nlp('The children play in garden.')
roses.nouns().toSingular()
console.log(roses.text()); // The child play in garden.

// .numbers()
let myNum = nlp('one hundred twenty two')
myNum.numbers().add(2)
console.log(myNum.text())
// 'one hundred twenty two four'

// .topics() - access name, places, org etc.
let spot = nlp('buddyHolly')
spot.people().if('mary').json()


// spot = nlp('the opera about Axay visiting japan')
spot = nlp('Vivek to come up with powerpoint UX wireframes and validate with Hemant in Bangalore. Hemant can validate with his contacts too in Mumbai. Kamal and Akshay to pair and develop a skeleton app in lambda and s3 using react so that we can prove to ourselves that we do not need a running server and can do it using only the on-demand priced components (Hyderabad).')
console.log(spot.topics().json());
// [ { text: 'japan', terms: [ [Object] ] } ]

// contractions - Handle implicit terms
let term = nlp("we're not gonna take it, no we aren't gonna take it.")
// match term
term.has('going') // true

// transform
term.contractions().expand()
console.log(term.text()) // we are not going to take it, no we are not going to take it.

// nagative
var negative = nlp('Kella is calling')
negative.verbs().toNegative()
console.log(negative.text());
// Kella is not calling

var positive = nlp("I'm not there") // convert to positive
positive.verbs().toPositive()
console.log(positive.text());

var text = nlp("They aren't coming tomorrow")
text.verbs().toPositive()
console.log(text.text()); // They are coming tomorrow

// NUMBERS - Plus, minus or arithmetic math operations
var bottle = nlp('two bottles of juice')
bottle.numbers().minus(1)
console.log(bottle.text()); // one bottle of juice

var money = nlp('I have one lakh dollars')
money.numbers().plus(200124)
console.log(money.text());
// I have two hundred thousand one hundred and twenty five lakhs dollars

let superman = nlp("i have two questions for Homer - 'Why lie?' and 'Lies, why?'")
let numbers = superman.values()
console.log(numbers.out('array')); // [ 'two' ]

var money = nlp('I have two lakh dollars')
money.numbers().increment()
console.log(money.text()); // I have two lakh dollars
money.numbers().decrement()
console.log(money.text());

// Compromise accessors

// .first() - use only first result
// this type not working only gives first result, when try to access last property it still return first property.
let cars = nlp(`Ferrari, ford mustang, Lamborghini`)
cars.first()
// cars.last()
// console.log(cars.text()); // Ferrari
// .last()
// let cars2 = nlp(`Pontiac Buick, Ford Mustang, Honda Civic`).nouns()
// cars2.last().text()
// console.log(cars2.text())

let bikes = nlp('Harley Davidson', 'Ducati', 'KTM')
bikes.last()
console.log(bikes.text()); 

let umbrella = nlp(`Rihanna, Ember Island, Moonshine`)
umbrella.first()
console.log(umbrella.text()); // not working only return whole string not first or last words

/*
// .extend() method
let myWords = {
    jhon: 'FirstName',
    doe: 'FirstName'
}

let user = nlp(muppetText, myWords)

// make heavier changes
nlp.extend((Doc,world) => {
    // add new tags
    world.addTags({
        Charcter: {
            isA: 'Person',
            notA: 'Adjective',
        },
    })

    // add or change word in lexicon
    world.addWords({
        jhon: 'Character',
        jane: 'Character',
    })

    // add method to run after the tagger
    world.postProcess(doc => {
        doc.match('light the lights').tag('#verb . #Plural')
    })

    // add the whole new method
    Doc.proptotype.johnVoice = () => {
        this.sentences().prepend('well,')
        this.match('i [(am|was)]').prepend('um,')
        return this
    }
})
*/

var myPlugin = function(Doc, world) {
    // add method
    Doc.prototype.beNice = () => {
        this.match('#Infinitive').prepend('kindly')
        return this
    }

    // add some tags
    world.addTags({
        Charcter: {
            isA: 'Person',
            notA: 'Adjective', // conflicting tags can be array
            color: 'red'
        }
    })

    // add some words
    world.addWords({
        gonzo: 'MaleName',
        kermot: 'Frog',
        'minnie mouse': 'Character'
    })

    // post-process tagger
    world.postProcess(doc => {
        doc.match('light the light').tag('#verb', '#plural')
    })
}

// {
//     nlp.extend(myPlugin)
//     return console.log(nlp('wash the floor').beNice().text())
// }

let logexample = nlp(`gonzo, minnie mouse and kermit the frog`)
logexample = logexample.splitAfter('@hasComma')
let z = logexample.match('#character+')
console.log(z.out('array')); // [] return empty array

// custom verb conjugations

nlp.extend((_Doc, world) => {
    world.addConjugations({ swell: {Pasttense: 'got swol'}})
})

const conjuc = nlp('swell').tag('Verb')
console.log(conjuc.verbs().conjugate()[0]);
// {
//     Pasttense: 'got swol',
//     Gerund: 'swelling',
//     PastTense: 'swelled',
//     PresentTense: 'swells',
//     Infinitive: 'swell',
//     FutureTense: 'will swell'
//   }

var url = nlp('visit https://en.m.wikipedia.org/wiki/Main_Page').urls().out('array')
console.log(url); // raised PR for this issue

var url2 = nlp('visit www.yahoo.com').urls().out('array')
console.log(url2)
// [ 'www.yahoo.com' ]
var url3 = nlp('visit http://www.yahoo.com').urls().out('array')
console.log(url3)
// [ 'http://www.yahoo.com' ]
var url4 = nlp('visit http://in.en.yahoo.com').urls().out('array')
console.log(url4)
// [ 'http://in.en.yahoo.com' ]
var url5 = nlp('visit http://in-something.en.yahoo.com').urls().out('array')
console.log(url5) // raised PR for this issue
var url6 = nlp('visit yahoo.com').urls().out('array')
console.log(url6); // ['yahoo.com']