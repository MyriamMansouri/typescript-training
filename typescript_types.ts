// Boolean
const paidAccount : boolean = false;

// Number
const age : number = 33;

// String
const fullName : string = "Lady Gaga";

// Array
const ages : number[] = [33, 28, 97, 5];

// Tuple
const player : [number, string] = [3, fullName];

// Enum
enum ApprouvalStatus {Approuved, Pending, Rejected};
const job : ApprouvalStatus = ApprouvalStatus.Rejected;

// Any
const apiData : any[] = [23, true, 'Epiphanie'];

// Void
function printOut(msg: string): void {
    console.log(msg)
}

printOut("Hello")