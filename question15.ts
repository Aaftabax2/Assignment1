let guest1: string[]=['Asad', "Bilal", "Ahmad", "Hassan"];
let mesg1: string=", I would like to invite you for dinner tonight. Your presence will make the moment pleasant.";
let missed: string=" Can't make the dinner tonight."
console.log(`Dear All, Mr. ${guest1.splice(1,1)}${missed}`)
guest1.push('Hamid')
for (let i = 0; i < guest1.length; i++) {
    console.log(`Hi Dear ${guest1[i]}${mesg1}`);
}
