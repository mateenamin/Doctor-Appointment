

const adminMiddleware = (req, res, next) => {
     // Step 1 — role check karo
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: "Access denied. Admins only!"
        })
    }
    // Step 2 — admin hai → aage jao
    next()
}
    export default adminMiddleware



// Line by line:
// req.user.role    → auth middleware ne save kiya tha
//                    jab token verify kiya

// !== 'admin'      → agar admin nahi hai

// 403 Forbidden    → logged in hai lekin 
//                    permission nahi

// next()           → admin hai → aage jao


