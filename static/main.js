class Profile {
  constructor({ username, name, password }) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

  createUser(callback) {
    return ApiConnector.createUser({ "username": this.username, "name": this.name, "password": this.password }, (err, data) => {
      console.log(`Creating user ${this.username}`);
      callback(err, data);
    });
  }

  performLogin(callback) {
    return ApiConnector.performLogin({ "username": this.username, "password": this.password }, (err, data) => {
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
  const Katya = new Profile({
    username: 'katya',
    name: { firstName: 'ekaterina', lastName: 'gavriuk' },
    password: 'katyapass',
  })
  Katya.createUser((err, data) => {
    if (err) {
      console.error('Error during creating user Katya')
    } else {
      console.log(`Katya is created!`);
      Katya.performLogin((err, data) => {
        if (err) {
          console.error('Error during authorizing user Katya')
        } else {
          console.log(`Katya is authorized!`);
          Katya.addMoney({ currency: 'EUR', amount: 500000 }, (err, data) => {
            if (err) {
              console.error('Error during adding money to Katya');
            } else {
              console.log(`Added 500000 euros to Katya`);
              Katya.convertMoney({ fromCurrency: 'EUR', targetCurrency: 'NETCOIN', targetAmount: 36000 }, (err, data) => {
                if (err) {
                  console.error('Error during converting money for Katya');
                } else {
                  console.log(`Converted money`);
                  const Ivan =  new Profile({
                    username: 'vanya',
                    name: { firstName: 'ivan', lastName: 'chernyshevv' },
                    password: 'ivanpass',
                  })
                   Ivan.createUser((err, data) => {
                    if (err) {
                      console.error('Error during creating user Ivan')
                    } else {
                      console.log(`Ivan is created!`);
                      Katya.transferMoney({ to: 'vanya', amount: 36000 }, (err, data) => {
                        if (err) {
                          console.error('Error during transfering netcoins to Ivan');
                        } else {
                          console.log(`Transfered 36000 netkoins to Ivan`);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

}  
main();  