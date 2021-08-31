const possibleChanges = (usernames) => {
    let result = []
    for(let i=0; i < usernames.length; i++) {
        let nameArray = usernames[i].split('');
        result[i] = 'NO'
        for(let j=0; j < nameArray.length; j++) {
            for(let k=j+1; k < nameArray.length; k++) {
                if(nameArray[j] > nameArray[k]){
                    result[i] = 'YES'
                    break;
                }
            }
        }
    }


    return result;
}

// console.log(possibleChanges(['foo','bar','baz']));
console.log(possibleChanges(['bee','superhero','ace']));