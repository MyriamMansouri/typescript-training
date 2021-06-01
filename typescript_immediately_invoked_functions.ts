let names : string[] = ['Jordan', 'Tiffany', 'Kristine'];
let counter: number = 0;

// immediately invoked function
(function(names: string[]) {
    for (let name in names) {
        console.log(counter)
        counter +=1
    }
})(names)