const knex=require("./connection")

let inser_candidat = (data)=>{
    return knex('candidate').insert(data)
}

let inser_score = (data)=>{
    return knex('test_score').insert(data)
}

let high_score = (data)=>{    
    return knex('test_score').select('user_id_score').columns([
        knex.raw('sum(first_round + second_round + third_round) as max_val')
      ]).groupBy('user_id_score')
}
let get_users = (ids)=>{
    return knex('candidate').select('*').whereIn('user_id',ids)
}

let avg = (ids)=>{
    return knex('test_score').avg('first_round').avg('second_round').avg('third_round')
}

module.exports = {
    inser_candidat,   
    inser_score,
    get_users,
    high_score,   
    avg
};