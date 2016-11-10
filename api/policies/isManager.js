module.exports = (req, res, next) => {
  if (req.user.rola !== 'menadzer') {
    return res.unauthorized(null, {
      data: {
        message: 'User is not super admin!',
      },
    });
  }
  return next();
};
