import compromise from 'compromise'
import syllables from 'compromise-syllables'

const nlp = compromise.extend(syllables)

const word = 'silent'
console.log(nlp(word).terms().syllables()[0].syllables);