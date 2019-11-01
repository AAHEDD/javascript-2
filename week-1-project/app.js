const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    if (typeof param === "string" && isNaN(param) === false) {
      return true;
    } else {
      return false;
    }
    
    // write me!
  },
  addString: function (param) {
   
    if (typeof param !== "string") {
      return false;
    } else if (isNaN(param)) {
      this.NaNyStrings.push(param);
    } else if (!isNaN(param)) {
      this.numberyStrings.push(param);
    }
    return true;
    //return !isNaN(param); // write this early return condition

    // write me! (using this.isNumberyString)
  },
  allStrings: function () {
    // write me!
    if (this.NaNyStrings.length === 0){
      return this.numberyStrings;
    } 
    else if (this.numberyStrings.length === 0){
      return this.NaNyStrings;
    } 
    else return this.numberyStrings.concat(this.NaNyStrings);
  },
  evenStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      function ifEvenString(number) {
        return number % 2 === 0;
      }
      return this.numberyStrings.filter(ifEvenString);
    } else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0) {
      function ifEvenString(number) {
        return number % 2 === 0;
      }
      return this.numberyStrings.filter(ifEvenString);
    }
  },
  oddStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      function ifOddString(number) {
        return number % 2 !== 0;
      }
      return this.numberyStrings.filter(ifOddString);
    } else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0) {
      function ifOddString(number) {
        return number % 2 !== 0;
      }
      return this.numberyStrings.filter(ifOddString);
    }
  },
  negativeStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      function ifNegativeSrting(number) {
        return number < 0;
      }
      return this.numberyStrings.filter(ifNegativeSrting);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      function ifNegativeSrting(number) {
        return number < 0;
      }
      return this.numberyStrings.filter(ifNegativeSrting);
    }
  },
  positiveStrings: function () {
    // write me!
    
      if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
        return this.numberyStrings;
      else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
        function ifPositiveString(number) {
          return number > 0;
        }
        return this.numberyStrings.filter(ifPositiveString);
      } else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0) {
        function ifPositiveString(num) {
          return num > 0 || num === "";
        }
        return this.numberyStrings.filter(ifPositiveString);
      }
  },
  zeroStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0)
      return this.numberyStrings;
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      function ifZeroSrting(number) {
        return number == 0;
      }
      return this.numberyStrings.filter(ifZeroSrting);
    } else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0) {
      function ifZeroSrting(number) {
        return number == 0;
      }
      return this.numberyStrings.filter(ifZeroSrting);
    }
  },
  numberyAsNumbers: function () {
    // write me!
  },
  NaNyAsNumbers: function () {
    // write me!
  },
  sumOfNumbery: function () {
    // write me!
  },
  sumOfNaNy: function () {
    // write me!
  },
};


