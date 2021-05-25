const { map } = require('..')
const knex = require('../model/query')

const inser_candidat = (req, res,) => {
    const candidat_datil = {
        user_name : req.body.user_name,
        email : req.body.email
    }
    knex.inser_candidat(candidat_datil)
    .then((data)=>{
		res.status(200).json(data)
	})
	.catch((err)=>{
		res.status(400).json(err)
	})

}

const inser_score = (req, res) => {
    knex.inser_score(req.body)
    .then((data)=>{
		res.status(200).json(data)
	})
	.catch((err)=>{
		res.status(400).json(err)
	})

}

function score_calculation (data){
    if(data.length > 0){
        let max_score = 0;
        let multi_max_user = [];
        data.map((detail)=>{
            if(detail.max_val > max_score){
            max_score =  detail.max_val
            }
        })
        data.map((detail)=>{
            if(detail.max_val == max_score){
            multi_max_user.push(detail.user_id_score)
            }
        })
       console.log(multi_max_user);
       return [multi_max_user , max_score]
        
    }
}

const get_score = (req, res) => {
    knex.high_score()
    .then((data)=>{
        var ids = (score_calculation(data))
        knex.get_users(ids[0])
        .then((users)=>{
            users.push({'max_score':ids[1]})
            knex.avg()
            .then((avg)=>{
                users.push({"avg":avg[0]})
                res.json(users)
            })
            
        })
       
	})
}

module.exports = {  
    inser_candidat,
    inser_score,
    get_score
  };
  