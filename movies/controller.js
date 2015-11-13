var User = require('./models/user')

modules.exports = {
  
    index: function(req, res, next) {
        res.status(200).json(User);
    },
    
    show: function(req, res, next) {
        var requestedUser = user[req.params.id];
        res.status(200).json(requestedUser);
    },
    
    build: function(req, res, next) {
        user.push(req.body);
        res.status(200).json({ message: 'cool beans'});
        
    },
    
    
    
};