const database = [{}];
const get = index => typeof database[database.length-1][index] !== "undefined" ? database[database.length-1][index] : null;

const set = (index, data) => {
  database[database.length-1][index] = data;
  return true
}

const unset = index => {
  if( typeof database[database.length-1][index] !== "undefined"){
    delete database[database.length-1][index];
  }
  return true;
}

const numequalto = (value) => {
  let counter = 0
  for (const item of database[database.length-1]) {
    if(item==value){
      counter++
    }
  }
  return counter
}

exports.get = get;
exports.set = set;
exports.unset = unset;
exports.numequalto = numequalto;
exports.db = database;