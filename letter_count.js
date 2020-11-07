function letter_count(word, letter) {
    counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]){
      counter++;
    }
  }
  console.log(counter);
  }
    
  letter_count('ramazan', 'a')