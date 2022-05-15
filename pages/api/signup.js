import initDB from '../../helpers/initDB';
import Users from '../../modals/Users';
import bcrypt from 'bcryptjs';

initDB();

export default async function (req,res){
    const {name, email, pw} = req.body;
    try{
        if(!name || !email || !pw){
            return res.status(200).json({
                err: 'Please add all the field',
                status: 400
            });
        }

      const user = await Users.findOne({email});
      console.log(user);
      if(user){
          return res.status(200).json({
            err: 'Email already exist',
            status: 400
          })
      }
        
     const hashPw = await bcrypt.hash(pw,14);
     const addedUser = await new Users({
         name,
         email,
         pw: hashPw
     }).save();

     res.status(201).json({
         message: "Succesfully Signed up! Redirecting to login page",
         status: 201,
         addedUser
     });

    }catch(err){
        console.log(err);
    }
}
