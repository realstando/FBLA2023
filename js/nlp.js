const natural = require('natural');
const { WordTokenizer } = natural;
const tokenizer = new WordTokenizer();

const degrees = ['associate', 'bachelor', 'master', 'graduate', 'doctorate', 'professional'];
const fasDegreeP = [1, 1, 1, 1, 1, 1];
const comDegreeP = [1, 1, 1, 1, 1, 1];
const cusDegreeP = [1, 1, 1, 1, 1, 1];
const salDegreeP = [1, 1, 1, 1, 1, 1];

const years = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
'11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
const fasYearsP = [1, 1, 1, 1, 5, 6, 7, 8, 9, 10, 
11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const comYearsP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const cusYearsP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const salYearsP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function rank(job, app) {
    let filteredApp = tokenizer.tokenize(app);
    filteredApp = convertStringToNumber(filteredApp.join(' '));
    console.log(filteredApp);
    let points = 0;

    for (var i = 0; i < degrees.length; i++) {
        let dis = calcDistance(filteredApp, degrees[i], 'degree');
        if (dis <= 3 && dis >= 1) {
            if (job === 'Fashion Designer') { 
                points += fasDegreeP[i];
                break;
            } else if (job === 'Communications Specialist') {
                points += comDegreeP[i];
                break;
            } else if (job === 'Customer Service') {
                points += cusDegreeP[i];
                break;
            } else if (job === 'Sales Manager') {
                points += salDegreeP[i];
                break;
            }
        }
    }

    for (var i = 0; i < years.length; i++) {
        let dis = calcDistance(filteredApp, years[i], 'year') + calcDistance(filteredApp, 'year', 'experience');
        if (dis <= 4 && dis >= 1) {
            if (job === 'Fashion Designer') { 
                points += fasYearsP[i];
                break;
            } else if (job === 'Communications Specialist') {
                points += comYearsP[i];
                break;
            } else if (job === 'Customer Service') {
                points += cusYearsP[i];
                break;
            } else if (job === 'Sales Manager') {
                points += salYearsP[i];
                break;
            }
        }
    }
    
}

function calcDistance(sentence, word1, word2) {
    let tokens = tokenizer.tokenize(sentence);
    for (var i = 0; i < tokens.length; i++) {
        let dis1 = natural.LevenshteinDistance(tokens[i], word1);
        let dis2 = natural.LevenshteinDistance(tokens[i], word2);
        if (dis1 >= 0 && dis1 <= 2) {
            tokens[i] = word1;
        } else if (dis2 >= 0 && dis2 <= 2) {
            tokens[i] = word2;
        }
    }
    let index1 = tokens.indexOf(word1);
    let index2 = tokens.indexOf(word2);

    if (index1 === -1 || index2 === -1) {
        return 0;
    }
    return Math.abs(index1 - index2);
}

function convertStringToNumber(wordString) {
    const wordMap = {
      'zero': '0',
      'one': '1',
      'two': '2',
      'three': '3',
      'four': '4',
      'five': '5',
      'six': '6',
      'seven': '7',
      'eight': '8',
      'nine': '9',
      'ten': '10',
      'eleven': '11',
      'twelve': '12',
      'thirteen': '13',
      'fourteen': '14',
      'fifteen': '15',
      'sixteen': '16',
      'seventeen': '17',
      'eighteen': '18',
      'nineteen': '19',
      'twenty': '20',
    };
    
    // Split the input string into an array of words
    const words = wordString.split(' ');
  
    // Map each word to its numeric representation
    const numericArray = words.map(word => wordMap[word] || word);
  
    // Join the array back into a string and parse it as a number
    const numericString = numericArray.join(' ');

    return numericString;
  }
