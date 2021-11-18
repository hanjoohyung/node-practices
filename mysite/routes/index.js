const applicationRouter = {
    setup: function(application) {
        application
          .all('*', function(req, res, next){
              res.locals.req = req;
              res.locals.res = res;
              next();
          })

          .use('/', require('./main'))
          .use('/user', require('./user'));
             }

        }

module.exports = { applicationRouter }
  

