const jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const auth =  async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        if (!authorization) return res.status(403).json({ message: 'Forbidden authorization token is not found' })
        const accessToken = authorization.split(' ')[1];
        const decoded = jwt.verify(accessToken, process.env.SECRET_KEY_JWT);
        const userData = await prisma.m_user.findFirstOrThrow({ where: { u_id: decoded.id } })
        req.user = userData
        next()
    }catch(err){
        console.log(err)
        return res.status(404).json({ message: err.message })
    }
}

module.exports = { auth }