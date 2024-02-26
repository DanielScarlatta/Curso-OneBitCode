function PhoneNumber(phoneNumberString) {
  const fixedStrig = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedStrig.match(/(?<=\+)\d{1,3}/g)[0];
  this.ddd = fixedStrig.match(/(?<=\()\d+(?=\))/g)[0];
  this.number = fixedStrig.match(/(?<=\)).+/g)[0].replace(/-/, '');
}

console.log(new PhoneNumber("+55 (11) 96332-2602"));
console.log(new PhoneNumber("+1 (25) a824186-3215"));
