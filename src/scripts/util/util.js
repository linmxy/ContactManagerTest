var util =  {};
util.oid = function(){
  return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
};

module.exports = util;
