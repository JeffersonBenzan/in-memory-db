
const database = require('./database')

const GET = index => database.get(index)

const SET = (index, data) =>  database.set(index, data)

const UNSET = index => database.unset(index)

const NUMEQUALTO = value => database.numequalto(value)


const BEGIN = ()=>{
    database.db.push(Object.assign({},database.db[database.db.length-1]) )
    return true
}

const COMMIT = ()=>{

    let localChanges = database.db.splice(0)
    console.log(localChanges);  

    localChanges.forEach(change=>{
        let obj = { ...Object.assign({},database.db[0]) ,... Object.assign({}, change) }
        console.log("Objeto creadoL ",obj)
        database.db[0] = obj
    })

    return localChanges.length>0
}

const ROLLBACK = ()=>{
    let transactions = database.db.splice(1)
    return transactions.length>0
}

const DB = ()=>{
    console.log('database:',database.db)
}

exports.GET = GET;
exports.SET = SET;
exports.UNSET = UNSET;
exports.NUMEQUALTO = NUMEQUALTO;
exports.BEGIN = BEGIN;
exports.COMMIT = COMMIT;
exports.ROLLBACK = ROLLBACK;
exports.DB = DB;
