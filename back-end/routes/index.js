const AuthenticationRoute = require('./AuthenticationRoute');
const ProductRoute = require('./ProductRoute');


function Route (app){
    app.use('/admin',AuthenticationRoute);
    app.use('/product', ProductRoute);
}


module.exports = Route