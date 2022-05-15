import initDB from '../../helpers/initDB';
import Users from '../../modals/Users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

initDB();

export default async function (req, res) {
    const { email, pw } = req.body;
    try {
        if (!email || !pw) {
            return res.status(200).json({
                err: 'Please add all the field',
                status: 400
            });
        }

        // this userEmail is the perticular user data with the given email 
        const userEmail = await Users.findOne({ email });
        // console.log(userEmail);
        if (!userEmail) {
            return res.status(200).json({
                err: 'User doesnt exist! plaese signup',
                status: 400
            })
        }


        // bcrypt returns Boolean, if password mathes , it will return true 
        const matchingPw = await bcrypt.compare(pw, userEmail.pw);
        if (matchingPw) {
          const token =  jwt.sign(
                { userId: userEmail._id },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn:"7d"
                }
            );
            return res.status(201).json({
                data: userEmail,
                token
            });
        } else {
            return res.status(200).json({
                error: "password not matched!",
                status: 400
            });
        }
        
    } catch (err) {
        console.log(err);
    }
}