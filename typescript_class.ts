class Report {
    companyProfile : string;

    constructor(public name) {
        this.companyProfile = name;
    }
}

class Invoice extends Report {
    constructor(public name: string, public total: number) {
        super(name)
    }

    printInvoice() {
        return this.name + ', ' + this.total;
    }
}

class BillOfLading extends Report {
    constructor(public name: string, public city: string, public state: string) {
        super(name)
    }

    printBol() {
        return this.name + ', ' + this.city;
    }
  
}


let googleInvoice = new Invoice('Google', 1000000);
let YAHOOBillOfLading = new BillOfLading('YAHOO', 'SF', 'State');

console.log(googleInvoice.printInvoice());
console.log(YAHOOBillOfLading.printBol());



