import users from '../models/auth.js';
import bcrypt from 'bcryptjs';

export async function signup(req, res) {
    const [name, email, password] = req.body;

    try {
        const existUser = await users.findOne({ email });

        if (existUser) {
            return res.status(400).json({ message: "User already exist" })
        }

        const hashPassword = await bcrypt.hash(password)
        const newUser = await users.create(
            {
                name,
                email,
                password: hashPassword
            }
        )

        res.status(200).json({ result: newUser })
    } catch (error) {
        console.log("signup error: " + error.message());
        res.status(500).json({ message: "something went wrong ..." })
    }
}

export async function login(req, res) {
    const { email, password } = req.body;
    try {
        const existUser = await users.findOne({ email });

        if (!existUser) {
            return res.status(404).json({ message: "User does not exist" })
        }

        const isPasswordCrct = await bcrypt.compare(password, existUser.password);

        if (!isPasswordCrct) {
            return res.status(400).json({ message: "Invalid Creditional" })
        }

        res.status(200).json({ result: existUser })
    } catch (error) {
        console.log("login error: " + error.message());
        res.status(500).json({ message: "something went wrong ..." })
    }
}