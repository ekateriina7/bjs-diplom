class Profile {
    constructor({username, name: {firstName, lastName}, password}) {
     this.username = username;
     this.firstName = firstName;
     this.lastName = lastName;
     this.password = password;
    }
  
  
    createUser(callback) {
      return ApiConnector.createUser({username: this.username, firstName: this.firstName, lastName: this.lastName, password: this.password}, (err, data) => {
        console.log(`Creating user ${this.username}`);
        callback(err, data);
      });
    }
  
    performLogin(callback) {
       return ApiConnector.performLogin({ username: this.username, password: this.password }, (err, data) => {
        console.log(`Autorizing user ${this.username}`);
        callback(err, data);
      });
    }
  
    addMoney({ currency, amount }, callback) {
      return ApiConnector.addMoney({ currency, amount }, (err, data) => {
        console.log(`Adding ${amount} of ${currency} to ${this.username}`);
        callback(err, data);
      });
    }
  
    convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback) {
      return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err, data) => {
        console.log(`Converting ${fromCurrency} to ${targetAmount} ${targetCurrency}`);
        callback(err, data);
      });
    }
    
    transferMoney({ to, amount }, callback) {
      return ApiConnector.transferMoney({ to, amount }, (err, data) => {
        console.log(`Transfering ${amount} to ${to}`);
        callback(err, data);
      });
    }
  
    getStocks(callback) {
      return ApiConnector.getStocks((err, data) => {
        console.log(`Getting stock info ${data}`);
        callback(err, data);
      });
    }
  }
  
  function main() {
      
  }