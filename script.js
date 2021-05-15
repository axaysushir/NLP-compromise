const nlp = require('compromise')
nlp.extend(require('compromise-syllables'))


const word = 'silent'
console.log(nlp(word).terms().syllables()[0].syllables);

let json = nlp('Chocolate microscopes silent').terms().syllables();
console.log((json));

// [
//     {
//       text: 'Chocolate',
//       normal: 'chocolate',
//       syllables: [ 'cho', 'co', 'late' ]
//     },
//     {
//       text: 'microscopes',
//       normal: 'microscopes',
//       syllables: [ 'mic', 'ros', 'copes' ]
//     },
//     { text: 'silent', normal: 'silent', syllables: [ 'silent' ] }
// ]

let doc = nlp("That may not sound impressive, but keep in mind it is a very big canyon.")
let m = doc.match('(sound|very)')
console.log(m.syllables({ offset:true }))

// [
//     {
//       text: 'sound',
//       terms: [ [Object] ],
//       offset: { index: 3, start: 13, length: 5 },
//       syllables: [ 'sound' ]
//     },
//     {
//       text: 'very',
//       terms: [ [Object] ],
//       offset: { index: 12, start: 56, length: 4 },
//       syllables: [ 've', 'ry' ]
//     }
// ]