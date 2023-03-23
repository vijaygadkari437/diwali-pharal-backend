const authService = require("../../services/authenticate");
const WEBHOOKS_LIST = ["/api/v1/product"];
module.exports = async function (req, res, next) {
    try {
        let checkURL = req.originalUrl.split("?")[0];

        if (WEBHOOKS_LIST.includes(checkURL) && req.method === "GET") return next();
        const tokenHeader = req.cookies && req.cookies["authorization-access-token"];
        if (!tokenHeader) return res.sendStatus(401);
        const user = await authService.validateToken(tokenHeader);
        req.user = user;
        next();
    } catch (e) {
        if (e.expiredAt) return res.status(401).json({ msg: "Token expired" });
        res.status(401).json({ msg: "Token expired" });
    }
};