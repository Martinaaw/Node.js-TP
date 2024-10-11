import User from "../models/mongoDB/user.js";
import { hash, compare } from "bcrypt";
import jwt from 'jsonwebtoken'
const saltRounds = 10

export const usersController = {
    async registerUser(req, res) {
        try {
            const { name, email} = req.body
            const password = await hash(req.body.password, saltRounds)
            const newUser = new User({ name, email, password })

            const response = await newUser.save()

            return res.status(201).json({ message: 'User registered', data: response })
      
          } catch (error) {
            return res.status(500).json({ message: 'Error registering user', error: error.message })
          }
        },
        async loginUser(req,res) {
            try {
                const { email, password } = req.body
                const user = await User.findOne({ email })
          
                if (!user) {
                  return res.status(401).json({ succes: false, message: "Invalid Email" })
                }
          
                const isSamePassword = await compare(password, user.password);
                if (!isSamePassword) {
                  return res.status(401).json({ succes: false, message: "That password does not exist" })
                }
                 const userForToken = {
                   username: user.name,
                    email: user.email,
                  id: user._id,
                }
         const accessToken = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: '1h' })

      return res.status(200).json({ success: true, message: "Login successful", user: {
          username: user.name,
          email: user.email,
          id: user._id,
        },
        token: accessToken
      })

    } catch (error) {
      return res.status(500).json({ message: "Error during login", error: error.message });
    }
  }
}
               
              

        
    
    
        
        



       
    

    
