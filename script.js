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
