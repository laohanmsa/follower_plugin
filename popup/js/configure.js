


(function(self){
 var _register = (self.__antRegister = self.__antRegister || {});
 function register(key , value){
     if ()
      if (_register[key] && _register[key] != value){
          throw Error('can not override existing key-value pair');
          return null ;
      }

      _register[key] = value;
     return value;
 }



})(this);