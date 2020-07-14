const Scrapper = require('./lib/scrapper');
const Currency = require('./models/mongoose/Currency');

const scrapper = new Scrapper("https://api.exchangeratesapi.io/latest", {}, 
    data => {
        const { rates, base } = data;
        const devices = [...Object.keys(rates), base];
        console.log(data)
        return devices;
    },
    devices => {
        Promise.all(
            devices.map(device => {
                const currency = new Currency({ name: device });
                return currency.save();
            }))
                .then(() => console.log('all data saved'))
                .catch(e => console.error(e));
    }
);
scrapper.scrap();