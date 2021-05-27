const nlp = require('compromise')
nlp.extend(require('compromise-syllables'))


const word = 'silence are silent'
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

let dict = nlp("That may not sound impressive, but keep in mind it is a very big canyon.")
let o = dict.match('(impressive|canyon)')
console.log(o.syllables({ offset:true }))

let dict2 = nlp("I played a song, it's awesome song i ever heard.")
let o0 = dict.match('(played|awesome)')
console.log(oo.syllables({ offset:true }))

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

// [
//     {
//       text: 'impressive,',
//       terms: [ [Object] ],
//       offset: { index: 4, start: 19, length: 11 },
//       syllables: [ 'im', 'pres', 'sive' ]
//     },
//     {
//       text: 'canyon.',
//       terms: [ [Object] ],
//       offset: { index: 14, start: 65, length: 7 },
//       syllables: [ 'ca', 'nyon' ]
//     }
//   ]
git commit --amend --no-edit --date="Thu May 27 2:00:00 2021 -0600" 