class Invoice {
    companyProfile : string;

    constructor(public name, public city, public state) {
        this.companyProfile = name + ' ' + city + ' ' + state;
    }
}

let googleInvoice = new Invoice('Google', 'Mountaine View', 'State');
let YAHOOInvoice = new Invoice('YAHOO', 'SF', 'State');

console.log(googleInvoice);
console.log(YAHOOInvoice);

