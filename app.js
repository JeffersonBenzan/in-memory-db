const commands = require('./commands')
process.stdin.setEncoding('utf8');
console.log("Welcome!!\n");
process.stdin.on('readable', function() {
    let input = process.stdin.read();
    input = input.replace('\n','').split(' ')
    let command = input[0]
    if(command=="END"){
        process.exit(1)
    }
    let args = input.slice(1)
    let result = commands[command](...args) 
    if(result==null) {
        result = "NULL"
    }else if(result==true){
        result = ''
    }else if(result==false){
        result="NO TRANSACTION"
    }
    process.stdout.write(result.toString()+'\n')
    process.stdin.read();
});

process.stdin.on('end', function() {
    console.log(input);
});
