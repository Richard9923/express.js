const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('gost')} ${req.originalUrl}`);
    next();
};

export default logger;