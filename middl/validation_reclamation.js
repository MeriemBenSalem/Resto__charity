const  yup =require ("yup");

const validate =async(req,res,next)=>{
    try{
        
        const Schema=yup.object().shape({
            reclamation:yup.string().required(),
            date:yup.date().required()
          

        })
        await Schema.validate(req.body);
        next();
    }
    catch(err){
        console.log(err);

    }
}

module.exports=validate;