const  yup =require ("yup");

const validate =async(req,res,next)=>{
    try{
        
        const Schema=yup.object().shape({
            name:yup.string().required(),
            email:yup.string().email().required(),
            nbrReclamation:yup.number().required()
        })
        await Schema.validate(req.body);
        next();
    }
    catch(err){
        console.log(err);

    }
}

module.exports=validate;