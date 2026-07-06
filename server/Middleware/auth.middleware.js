import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    try {
        // Step 1 — Header se token nikalo
        const token = req.headers.authorization?.split(' ')[1]
        // "Bearer eyJhbG..." → sirf token part lo

        // Step 2 — Token hai ya nahi
        if (!token) {
            return res.status(401).json({
                message: "Access denied. No token provided!"
            })
        }

        // Step 3 — Token verify karo
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Step 4 — User ID save karo
        req.user = decoded

        // Step 5 — Aage jaو
        next()

    } catch (err) {
        res.status(401).json({
            message: "Invalid or expired token!"
        })
    }
}

export default authMiddleware


