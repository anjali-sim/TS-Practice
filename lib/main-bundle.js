/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./utils/utils11.ts":
/*!**************************!*\
  !*** ./utils/utils11.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtraFunctionImplement = exports.SecondCalculator1Implement = exports.SecondCalculatorImplement = exports.FunctionCalculatorImplement = exports.obj = exports.TrigonometryCalculatorImplement = exports.MyClass = exports.myFunction = void 0;
const inputField = document.getElementById("input");
function myFunction() {
    return 'Hello from myFunction';
}
exports.myFunction = myFunction;
class MyClass {
}
exports.MyClass = MyClass;
class TrigonometryCalculatorImplement {
    degree = 0;
    input;
    constructor(input) {
        this.input = input;
    }
    /**
     * @function  sine
     * @description   evaluates the sine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sin(90 radian) to 0.8939966636005579
     * - sin(90 degree) to 1
     */
    sine() {
        if (this.degree === 0) {
            this.input.value = Math.sin((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.sin(parseFloat(this.input.value)).toString();
        }
    }
    /**
     * @function  cosine
     * @description  evaluates the cosine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cos(45 radian) to 0.5253219888177297
     * - cos(45 degree) to 0.7071067811865476
     */
    cosine() {
        if (this.degree === 0) {
            this.input.value = Math.cos((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.cos(parseFloat(this.input.value)).toString();
        }
    }
    /**
     * @function  tangent
     * @description  evaluates the tangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - tan(60 radian) to 0.320040389379563
     * - tan(60 degree) to 1.7320508075688767
     */
    tangent() {
        if (this.degree === 0) {
            this.input.value = Math.tan((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.tan(parseFloat(this.input.value)).toString();
        }
    }
    /**
     * @function  cotangent
     * @description  evaluates the cotangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cot(30 radian) to -0.15611995216165922
     * - cot(30 degree) to 1.7320508075688774
     */
    cotangent() {
        if (this.degree === 0) {
            this.input.value = (1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.tan(parseFloat(this.input.value))).toString();
        }
    }
    /**
     * @function  secant
     * @description  evaluates the secant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sec(45 radian) to 1.9035944074044246
     * - sec(45 degree) to 1.414213562373095
     */
    secant() {
        if (this.degree === 0) {
            this.input.value = (1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.cos(parseFloat(this.input.value))).toString();
        }
    }
    /**
     * @function  cosecant
     * @description  evaluates the cosecant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cosec(60 radian) to -3.280725574403968
     * - cosec(60 degree) to 1.1547005383792517
     */
    cosecant() {
        if (this.degree === 0) {
            this.input.value = (1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.sin(parseFloat(this.input.value))).toString();
        }
    }
}
exports.TrigonometryCalculatorImplement = TrigonometryCalculatorImplement;
exports.obj = new TrigonometryCalculatorImplement(inputField);
class FunctionCalculatorImplement {
    input;
    constructor(input) {
        this.input = input;
    }
    /**
     * @function  floor
     * @description  to round down and evaluates the largest integer less than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.85 = 5
     */
    floor() {
        this.input.value = Math.floor(parseFloat(this.input.value)).toString();
    }
    /**
     * @function  ceil
     * @description  to round up and evaluates the smaller integer greater than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.23 = 6
     */
    ceil() {
        this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
    }
    /**
     * @function  random
     * @description  gives a random number from 0 up to but not including 1
     * @params  none
     * @returns void
     * Examples:
     * - 0.8535283651436478
     * - 0.6407613844878561
     * - 0.1827885058635727
     */
    random() {
        this.input.value = Math.random().toString();
    }
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    modulus() {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    }
}
exports.FunctionCalculatorImplement = FunctionCalculatorImplement;
class SecondCalculatorImplement {
    input;
    errorDiv;
    constructor(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  square
     * @description  performs square of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5^2 to 25
     * - -6^2 to 36
     */
    square() {
        this.input.value = Math.pow(Number(this.input.value), 2).toString();
    }
    /**
     * @function  squareRoot
     * @description  performs the square root of a number
     * @params  none
     * @returns void
     * Examples:
     * - sqaureRoot(25) to 5
     * - squareRoot(-4) to Error!
     */
    squareRoot() {
        const inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.sqrt(inputNumber).toString();
        }
    }
    /**
     * @function  xRaiseY
     * @description  evaluates a number raised to another number
     * @params  none
     * @returns void
     * Examples:
     * - 6^3 to 216
     */
    xRaiseY() {
        this.input.value += "^";
    }
    /**
     * @function  raiseTo10
     * @description  gives 10 to the power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 10^3 to 1000
     */
    raiseTo10() {
        this.input.value = Math.pow(10, Number(this.input.value)).toString();
    }
    /**
     * @function  logarithm
     * @description  performs logarithm(log base 10) of a number
     * @params  none
     * @returns void
     * Examples:
     * - log(2) to 0.3010299956639812
     */
    logarithm() {
        const inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log10(inputNumber).toString();
        }
    }
    /**
     * @function  naturalLogarithm
     * @description  performs natural logarithm(ln base e) of a number
     * @params  none
     * @returns void
     * Examples:
     * - ln(2) to 0.6931471805599453
     */
    naturalLogarithm() {
        const inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log(inputNumber).toString();
        }
    }
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    displayError() {
        this.errorDiv.textContent = "Error!";
        setTimeout(() => {
            this.errorDiv.textContent = "";
            this.input.value = "";
        }, 2000);
    }
}
exports.SecondCalculatorImplement = SecondCalculatorImplement;
class SecondCalculator1Implement {
    input;
    errorDiv;
    constructor(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  cube
     * @description  to calculate the cube of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^3 to 8
     */
    cube() {
        this.input.value = Math.pow(Number(this.input.value), 3).toString();
    }
    /**
     * @function  cubeRoot
     * @description  to calculate the cube root
     * @params  none
     * @returns void
     * Examples:
     * - cubeRoot(125) to 5
     * - cubeRoot(-8) to Error!
     */
    cubeRoot() {
        const inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.cbrt(inputNumber).toString();
        }
    }
    /**
     * @function  raiseTo2
     * @description  to calculate 2 to power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^5 to 32
     * - 2^54524 to Infinity
     */
    raiseTo2() {
        this.input.value = Math.pow(2, Number(this.input.value)).toString();
    }
    /**
     * @function  logPlus
     * @description  to calculate logarithm of 1+p number
     * @params  none
     * @returns void
     * Examples:
     * - log1p(8) to 2.1972245773362196
     */
    logPlus() {
        const inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log1p(inputNumber).toString();
        }
    }
    /**
     * @function  expMinus
     * @description  to calculate e^x-1 where x is number
     * @params  none
     * @returns void
     * Examples:
     * - expm1(2) to 6.38905609893065
     */
    expMinus() {
        this.input.value = Math.expm1(Number(this.input.value)).toString();
    }
    /**
     * @function  eRaisex
     * @description  to calculate e^x where x is number
     * @params  none
     * @returns void
     * Examples:
     * - e^2 to 7.3890560989306495
     */
    eRaisex() {
        this.input.value = Math.pow(Math.E, Number(this.input.value)).toString();
    }
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    displayError() {
        this.errorDiv.textContent = "Error!";
        setTimeout(() => {
            this.errorDiv.textContent = "";
            this.input.value = "";
        }, 2000);
    }
}
exports.SecondCalculator1Implement = SecondCalculator1Implement;
class ExtraFunctionImplement {
    input;
    errorDiv;
    constructor(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  pi
     * @description  displays the value of PI
     * @params  none
     * @returns void
     * Examples:
     * - 3.141592653589793
     */
    pi() {
        this.input.value = Math.PI.toString();
    }
    /**
     * @function  euler
     * @description  displays the value of Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - 2.718281828459045
     */
    euler() {
        this.input.value = Math.E.toString();
    }
    /**
     * @function  clearAll
     * @description  to entirely clear the input field
     * @params  none
     * @returns void
     */
    clearAll() {
        this.input.value = "";
    }
    /**
     * @function  removeOneElementFromEnd
     * @description  to remove one number from the right side end once clicking on it
     * @params  none
     * @returns void
     * Examples:
     * - 5.2893 to 5.289
     */
    removeOneElementFromEnd() {
        this.input.value = this.input.value.slice(0, -1);
    }
    /**
     * @function  byX
     * @description  performs inverse of a number
     * @params  none
     * @returns void
     * Examples:
     * - 1/2 to 0.5
     */
    byX() {
        const x = Number(this.input.value);
        this.input.value = (1 / x).toString();
    }
    /**
     * @function modulo
     * @description evaluates the remainder after dividing one number by another.
     * @params  none
     * @returns void
     * Examples:
     * - 9%7 to 2
     * - 2%2 to 0
     */
    modulo() {
        this.input.value += "%";
    }
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    modulus() {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    }
    /**
     * @function  exponent
     * @description  evaluates the value of E^x, where E is Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - E^5 to 148.4131591025766
     */
    exponent() {
        const x = Number(this.input.value);
        this.input.value = Math.exp(x).toString();
    }
    /**
     * @function  factorial
     * @description  performs the factorial of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5! to 120
     */
    factorial() {
        let number = Number(this.input.value);
        if (number < 0) {
            const errDiv = document.getElementById("errorDiv");
            this.errorDiv.textContent = "Error!";
            setTimeout(() => {
                this.errorDiv.textContent = "";
                this.input.value = "";
            }, 2000);
        }
        else if (number == 0 || number == 1) {
            this.input.value = "1";
        }
        else if (number > 1) {
            for (let i = number - 1; i > 1; i--) {
                number = number * i;
            }
            this.input.value = number.toString();
        }
    }
    /**
     * @function  signChange
     * @description  gives a number with its opposite sign
     * @params  none
     * @returns void
     * Examples:
     * - 7 to -7
     */
    signChange() {
        const x = Number(this.input.value);
        this.input.value = (-x).toString();
    }
}
exports.ExtraFunctionImplement = ExtraFunctionImplement;
let object = new TrigonometryCalculatorImplement(inputField);
console.log(object.sine());
// export interface Memory {
//   memoryStack: number[];
//   input: HTMLInputElement;
//   buttonDisableToAble(): void;
//   memoryClear(): void;
//   memoryRecall(): void;
//   memoryAdd(): void;
//   memorySubtract(): void;
//   memorySave(): void;
// }
// export class MemoryImplement implements Memory {
//   memoryStack: number[] = [];
//   input: HTMLInputElement = document.createElement("input");
//   buttonDisableToAble(): void {
//     (document.getElementById("mc") as HTMLButtonElement).disabled = false;
//     (document.getElementById("mr") as HTMLButtonElement).disabled = false;
//   }
//   memoryClear(): void {
//     this.memoryStack = [];
//   }
//   memoryRecall(): void {
//     this.input.value = this.memoryStack[this.memoryStack.length - 1].toString();
//   }
//   memoryAdd(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 1) {
//       this.memoryStack.push(parseInt(this.input.value));
//     } else {
//       this.memoryStack[this.memoryStack.length - 1] += parseInt(
//         this.input.value
//       );
//     }
//   }
//   memorySubtract(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 0) {
//       this.memoryStack.push(-1 * parseInt(this.input.value));
//     } else {
//       this.memoryStack[this.memoryStack.length - 1] -= parseInt(
//         this.input.value
//       );
//     }
//   }
//   memorySave(): void {
//     this.buttonDisableToAble();
//     if (this.memoryStack.length === 0) {
//       this.memoryStack.push(parseFloat(this.input.value));
//     } else {
//       this.memoryStack.push(parseFloat(this.input.value));
//     }
//   }
// }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/script/script2.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeDropdown = exports.calculate = exports.modulusFunction = exports.randomFunction = exports.ceilFunction = exports.floorFunction = exports.cosecantFunction = exports.secantFunction = exports.cotangentFunction = exports.tangentFunction = exports.cosineFunction = exports.sineFunction = exports.degreeToRadian = exports.fixedToExponent = exports.displayInputValue = void 0;
const utils11_1 = __webpack_require__(/*! ../../utils/utils11 */ "./utils/utils11.ts");
const utils11_2 = __webpack_require__(/*! ../../utils/utils11 */ "./utils/utils11.ts");
console.log((0, utils11_2.myFunction)(), '<<func');
// const newObj = new MyClass();
//array to perform the memory operations
let memoryStack = [];
// variable used to toggle between degree and radian buttons
let degree = 0;
// console.log()
// for changing the dropdowns
let dropdownChange = 0;
//to take the input
const inputField = document.getElementById("input");
/**
 * @function displayInputValue
 * @description to take the input from the input field entered by the user and display it on the display bar
 * @param value
 * value : string
 * @returns void
 */
function displayInputValue(value) {
    inputField.value += value;
}
exports.displayInputValue = displayInputValue;
/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent() {
    const input = document.getElementById("input");
    input.value = Number(input.value).toExponential().toString();
}
exports.fixedToExponent = fixedToExponent;
/**
 * @function degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 * @returns void
 */
function degreeToRadian() {
    // if the degree variable is set to 0, then display the RAD(radian) button else DEG(degree) button
    if (degree === 0) {
        degree = 1;
        const degreeElement = document.querySelector("#degree");
        degreeElement.innerHTML = "RAD";
    }
    else {
        degree = 0;
        const degreeElement = document.querySelector("#degree");
        degreeElement.innerHTML = "DEG";
    }
}
exports.degreeToRadian = degreeToRadian;
/**
 * @description  validating to restrict the alphabets and special characters in the input field using event listener based on the ASCII code
 * Examples: if the user enters alphabets or special characters from keyboard, then restrict it from entering into the input field
 * - asfhjk to 0
 * - #&;} to 0
 * - 5869*2 to 5869*2
 */
inputField.addEventListener("keypress", function (event) {
    const allowedKeyCodes = [
        "33",
        "34",
        "35",
        "36",
        "38",
        "39",
        "58",
        "59",
        "60",
        "61",
        "62",
        "63",
        "64",
        "91",
        "92",
        "93",
        "95",
        "96",
        "123",
        "124",
        "125",
        "126",
    ];
    let i;
    for (i = 65; i <= 90; i++) {
        allowedKeyCodes.push(i.toString());
    }
    for (i = 97; i <= 122; i++) {
        allowedKeyCodes.push(i.toString());
    }
    const keyCode = event.keyCode.toString();
    if (allowedKeyCodes.indexOf(keyCode) > -1) {
        event.preventDefault();
    }
});
// const obj = new TrigonometryCalculatorImplement(inputField);
const utils11_3 = __webpack_require__(/*! ../../utils/utils11 */ "./utils/utils11.ts");
const sineFunction = () => {
    // console.log(obj.degree, "<<degree");
    // obj.sine();
};
exports.sineFunction = sineFunction;
const cosineFunction = () => {
    utils11_3.obj.cosine();
};
exports.cosineFunction = cosineFunction;
const tangentFunction = () => {
    utils11_3.obj.tangent();
};
exports.tangentFunction = tangentFunction;
const cotangentFunction = () => {
    utils11_3.obj.cotangent();
};
exports.cotangentFunction = cotangentFunction;
const secantFunction = () => {
    utils11_3.obj.secant();
};
exports.secantFunction = secantFunction;
const cosecantFunction = () => {
    utils11_3.obj.cosecant();
};
exports.cosecantFunction = cosecantFunction;
const obj2 = new utils11_1.FunctionCalculatorImplement(inputField);
const floorFunction = () => {
    obj2.floor();
};
exports.floorFunction = floorFunction;
const ceilFunction = () => {
    obj2.ceil();
};
exports.ceilFunction = ceilFunction;
const randomFunction = () => {
    obj2.random();
};
exports.randomFunction = randomFunction;
const modulusFunction = () => {
    obj2.modulus();
};
exports.modulusFunction = modulusFunction;
/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
    const input = document.getElementById("input");
    input.value = input.value.replaceAll("^", "**");
    input.value = input.value;
    const result = input.value;
    // Error handling
    /**
     * this try catch handles the error when user enters invalid input
     * Examples:
     * 9-6+5 = 8
     * 5-6/5* = Invalid Input!
     */
    function cal(user) {
        return new Function("return " + user)();
    }
    try {
        // function cal(user: string) {
        //   return new Function("return " + user)();
        // }
        const output = cal(`${result}`);
        const inputEl = document.getElementById("input");
        inputEl.value = output.toString();
    }
    catch (err) {
        const errDiv = document.getElementById("errorDiv");
        errDiv.textContent = "Invalid Input!";
        setTimeout(() => {
            errDiv.textContent = "";
            const inputEl = document.getElementById("input");
            inputEl.value = "";
        }, 2000);
    }
}
exports.calculate = calculate;
/**
 * @function  changeDropdown
 * @description  to toggle the buttons
 * @params  none
 * @returns void
 */
function changeDropdown(display1, display2) {
    let dropdownChange = 1;
    if (typeof document !== "undefined") {
        const elements2 = Array.from(document.getElementsByClassName("display2"));
        const elements1 = Array.from(document.getElementsByClassName("display1"));
        if (dropdownChange === 1) {
            elements2.forEach((x) => {
                x.style.display = "inline-block";
            });
            elements1.forEach((x) => {
                x.style.display = "none";
            });
            dropdownChange = 0;
        }
        else {
            elements1.forEach((x) => {
                x.style.display = "inline-block";
            });
            elements2.forEach((x) => {
                x.style.display = "none";
            });
            dropdownChange = 1;
        }
    }
    else {
        console.log("Error: `document` is not defined");
    }
}
exports.changeDropdown = changeDropdown;
const obj3 = new utils11_1.SecondCalculatorImplement("input", "errorDiv");
const squareFunction = () => {
    obj3.square();
};
const squareRootFunction = () => {
    obj3.squareRoot();
};
const xRaiseYFunction = () => {
    obj3.xRaiseY();
};
const raiseTo10Function = () => {
    obj3.raiseTo10();
};
const logarithmFunction = () => {
    obj3.logarithm();
};
const naturalLogarithmFunction = () => {
    obj3.naturalLogarithm();
};
const obj4 = new utils11_1.SecondCalculator1Implement("input", "errorDiv");
const cubeFunction = () => {
    obj4.cube();
};
const cubeRootFunction = () => {
    obj4.cubeRoot();
};
const raiseTo2Function = () => {
    obj4.raiseTo2();
};
const logPlusFunction = () => {
    obj4.logPlus();
};
const expMinusFunction = () => {
    obj4.expMinus();
};
const eRaisexFunction = () => {
    obj4.eRaisex();
};
const obj5 = new utils11_1.ExtraFunctionImplement("input", "errorDiv");
const piFunction = () => {
    obj5.pi();
};
const eulerFunction = () => {
    obj5.euler();
};
const clearAllFunction = () => {
    obj5.clearAll();
};
const removeOneElementFromEndFunction = () => {
    obj5.removeOneElementFromEnd();
};
const byXFunction = () => {
    obj5.byX();
};
const moduloFunction = () => {
    obj5.modulo();
};
const modulusFunction1 = () => {
    obj5.modulus();
};
const exponentFunction = () => {
    obj5.exponent();
};
const factorialFunction = () => {
    obj5.factorial();
};
const signChangeFunction = () => {
    obj5.signChange();
};
// import { MemoryImplement } from "../../utils/utils11";
// const obj6 = new MemoryImplement();
// const memoryClearFunction = () => {
//   obj6.memoryClear();
// };
// const memoryRecallFunction = () => {
//   obj6.memoryRecall();
// };
// const memoryAddFunction = () => {
//   obj6.memoryAdd();
// };
// const memorySubtractFunction = () => {
//   obj6.memorySubtract();
// };
// const memorySaveFunction = () => {
//   obj6.memorySave();
// };

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixHQUFHLGtDQUFrQyxHQUFHLGlDQUFpQyxHQUFHLG1DQUFtQyxHQUFHLFdBQVcsR0FBRyx1Q0FBdUMsR0FBRyxlQUFlLEdBQUcsa0JBQWtCO0FBQzVPO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoa0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLEdBQUcsaUJBQWlCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcsb0JBQW9CLEdBQUcscUJBQXFCLEdBQUcsd0JBQXdCLEdBQUcsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUcsdUJBQXVCLEdBQUcsc0JBQXNCLEdBQUcsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3JYLGtCQUFrQixtQkFBTyxDQUFDLCtDQUFxQjtBQUMvQyxrQkFBa0IsbUJBQU8sQ0FBQywrQ0FBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLCtDQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bGF0b3IvLi91dGlscy91dGlsczExLnRzIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9zY3JpcHQvc2NyaXB0Mi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXh0cmFGdW5jdGlvbkltcGxlbWVudCA9IGV4cG9ydHMuU2Vjb25kQ2FsY3VsYXRvcjFJbXBsZW1lbnQgPSBleHBvcnRzLlNlY29uZENhbGN1bGF0b3JJbXBsZW1lbnQgPSBleHBvcnRzLkZ1bmN0aW9uQ2FsY3VsYXRvckltcGxlbWVudCA9IGV4cG9ydHMub2JqID0gZXhwb3J0cy5Ucmlnb25vbWV0cnlDYWxjdWxhdG9ySW1wbGVtZW50ID0gZXhwb3J0cy5NeUNsYXNzID0gZXhwb3J0cy5teUZ1bmN0aW9uID0gdm9pZCAwO1xuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnSGVsbG8gZnJvbSBteUZ1bmN0aW9uJztcbn1cbmV4cG9ydHMubXlGdW5jdGlvbiA9IG15RnVuY3Rpb247XG5jbGFzcyBNeUNsYXNzIHtcbn1cbmV4cG9ydHMuTXlDbGFzcyA9IE15Q2xhc3M7XG5jbGFzcyBUcmlnb25vbWV0cnlDYWxjdWxhdG9ySW1wbGVtZW50IHtcbiAgICBkZWdyZWUgPSAwO1xuICAgIGlucHV0O1xuICAgIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBzaW5lXG4gICAgICogQGRlc2NyaXB0aW9uICAgZXZhbHVhdGVzIHRoZSBzaW5lIG9mIGEgbnVtYmVyIGluIGRlZ3JlZXMgb3IgcmFkaWFuc1xuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBzaW4oOTAgcmFkaWFuKSB0byAwLjg5Mzk5NjY2MzYwMDU1NzlcbiAgICAgKiAtIHNpbig5MCBkZWdyZWUpIHRvIDFcbiAgICAgKi9cbiAgICBzaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5kZWdyZWUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiBwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGguc2luKHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBjb3NpbmVcbiAgICAgKiBAZGVzY3JpcHRpb24gIGV2YWx1YXRlcyB0aGUgY29zaW5lIG9mIGEgbnVtYmVyIGluIGRlZ3JlZXMgb3IgcmFkaWFuc1xuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBjb3MoNDUgcmFkaWFuKSB0byAwLjUyNTMyMTk4ODgxNzcyOTdcbiAgICAgKiAtIGNvcyg0NSBkZWdyZWUpIHRvIDAuNzA3MTA2NzgxMTg2NTQ3NlxuICAgICAqL1xuICAgIGNvc2luZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVncmVlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLmNvcyhwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgdGFuZ2VudFxuICAgICAqIEBkZXNjcmlwdGlvbiAgZXZhbHVhdGVzIHRoZSB0YW5nZW50IG9mIGEgbnVtYmVyIGluIGRlZ3JlZXMgb3IgcmFkaWFuc1xuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSB0YW4oNjAgcmFkaWFuKSB0byAwLjMyMDA0MDM4OTM3OTU2M1xuICAgICAqIC0gdGFuKDYwIGRlZ3JlZSkgdG8gMS43MzIwNTA4MDc1Njg4NzY3XG4gICAgICovXG4gICAgdGFuZ2VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVncmVlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC50YW4oKE1hdGguUEkgLyAxODApICogcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLnRhbihwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgY290YW5nZW50XG4gICAgICogQGRlc2NyaXB0aW9uICBldmFsdWF0ZXMgdGhlIGNvdGFuZ2VudCBvZiBhIG51bWJlciBpbiBkZWdyZWVzIG9yIHJhZGlhbnNcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gY290KDMwIHJhZGlhbikgdG8gLTAuMTU2MTE5OTUyMTYxNjU5MjJcbiAgICAgKiAtIGNvdCgzMCBkZWdyZWUpIHRvIDEuNzMyMDUwODA3NTY4ODc3NFxuICAgICAqL1xuICAgIGNvdGFuZ2VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVncmVlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gKDEgLyBNYXRoLnRhbigoTWF0aC5QSSAvIDE4MCkgKiBwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAoMSAvIE1hdGgudGFuKHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSkpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgc2VjYW50XG4gICAgICogQGRlc2NyaXB0aW9uICBldmFsdWF0ZXMgdGhlIHNlY2FudCBvZiBhIG51bWJlciBpbiBkZWdyZWVzIG9yIHJhZGlhbnNcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gc2VjKDQ1IHJhZGlhbikgdG8gMS45MDM1OTQ0MDc0MDQ0MjQ2XG4gICAgICogLSBzZWMoNDUgZGVncmVlKSB0byAxLjQxNDIxMzU2MjM3MzA5NVxuICAgICAqL1xuICAgIHNlY2FudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVncmVlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gKDEgLyBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiBwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAoMSAvIE1hdGguY29zKHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSkpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgY29zZWNhbnRcbiAgICAgKiBAZGVzY3JpcHRpb24gIGV2YWx1YXRlcyB0aGUgY29zZWNhbnQgb2YgYSBudW1iZXIgaW4gZGVncmVlcyBvciByYWRpYW5zXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIGNvc2VjKDYwIHJhZGlhbikgdG8gLTMuMjgwNzI1NTc0NDAzOTY4XG4gICAgICogLSBjb3NlYyg2MCBkZWdyZWUpIHRvIDEuMTU0NzAwNTM4Mzc5MjUxN1xuICAgICAqL1xuICAgIGNvc2VjYW50KCkge1xuICAgICAgICBpZiAodGhpcy5kZWdyZWUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAoMSAvIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSkpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICgxIC8gTWF0aC5zaW4ocGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRyaWdvbm9tZXRyeUNhbGN1bGF0b3JJbXBsZW1lbnQgPSBUcmlnb25vbWV0cnlDYWxjdWxhdG9ySW1wbGVtZW50O1xuZXhwb3J0cy5vYmogPSBuZXcgVHJpZ29ub21ldHJ5Q2FsY3VsYXRvckltcGxlbWVudChpbnB1dEZpZWxkKTtcbmNsYXNzIEZ1bmN0aW9uQ2FsY3VsYXRvckltcGxlbWVudCB7XG4gICAgaW5wdXQ7XG4gICAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGZsb29yXG4gICAgICogQGRlc2NyaXB0aW9uICB0byByb3VuZCBkb3duIGFuZCBldmFsdWF0ZXMgdGhlIGxhcmdlc3QgaW50ZWdlciBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYSBnaXZlbiBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gNS44NSA9IDVcbiAgICAgKi9cbiAgICBmbG9vcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGguZmxvb3IocGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBjZWlsXG4gICAgICogQGRlc2NyaXB0aW9uICB0byByb3VuZCB1cCBhbmQgZXZhbHVhdGVzIHRoZSBzbWFsbGVyIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGEgZ2l2ZW4gbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIDUuMjMgPSA2XG4gICAgICovXG4gICAgY2VpbCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIHJhbmRvbVxuICAgICAqIEBkZXNjcmlwdGlvbiAgZ2l2ZXMgYSByYW5kb20gbnVtYmVyIGZyb20gMCB1cCB0byBidXQgbm90IGluY2x1ZGluZyAxXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIDAuODUzNTI4MzY1MTQzNjQ3OFxuICAgICAqIC0gMC42NDA3NjEzODQ0ODc4NTYxXG4gICAgICogLSAwLjE4Mjc4ODUwNTg2MzU3MjdcbiAgICAgKi9cbiAgICByYW5kb20oKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgbW9kdWx1c1xuICAgICAqIEBkZXNjcmlwdGlvbiAgZXZhbHVhdGVzIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiBhIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSAtNi4yMzUgPSA2LjIzNVxuICAgICAqL1xuICAgIG1vZHVsdXMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLmFicyhwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuRnVuY3Rpb25DYWxjdWxhdG9ySW1wbGVtZW50ID0gRnVuY3Rpb25DYWxjdWxhdG9ySW1wbGVtZW50O1xuY2xhc3MgU2Vjb25kQ2FsY3VsYXRvckltcGxlbWVudCB7XG4gICAgaW5wdXQ7XG4gICAgZXJyb3JEaXY7XG4gICAgY29uc3RydWN0b3IoaW5wdXQsIGVycm9yRGl2KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCk7XG4gICAgICAgIHRoaXMuZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlcnJvckRpdik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgc3F1YXJlXG4gICAgICogQGRlc2NyaXB0aW9uICBwZXJmb3JtcyBzcXVhcmUgb2YgYSBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gNV4yIHRvIDI1XG4gICAgICogLSAtNl4yIHRvIDM2XG4gICAgICovXG4gICAgc3F1YXJlKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5wb3coTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpLCAyKS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIHNxdWFyZVJvb3RcbiAgICAgKiBAZGVzY3JpcHRpb24gIHBlcmZvcm1zIHRoZSBzcXVhcmUgcm9vdCBvZiBhIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBzcWF1cmVSb290KDI1KSB0byA1XG4gICAgICogLSBzcXVhcmVSb290KC00KSB0byBFcnJvciFcbiAgICAgKi9cbiAgICBzcXVhcmVSb290KCkge1xuICAgICAgICBjb25zdCBpbnB1dE51bWJlciA9IE51bWJlcih0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLnNxcnQoaW5wdXROdW1iZXIpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICB4UmFpc2VZXG4gICAgICogQGRlc2NyaXB0aW9uICBldmFsdWF0ZXMgYSBudW1iZXIgcmFpc2VkIHRvIGFub3RoZXIgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIDZeMyB0byAyMTZcbiAgICAgKi9cbiAgICB4UmFpc2VZKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlICs9IFwiXlwiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIHJhaXNlVG8xMFxuICAgICAqIEBkZXNjcmlwdGlvbiAgZ2l2ZXMgMTAgdG8gdGhlIHBvd2VyIG9mIGEgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIDEwXjMgdG8gMTAwMFxuICAgICAqL1xuICAgIHJhaXNlVG8xMCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGgucG93KDEwLCBOdW1iZXIodGhpcy5pbnB1dC52YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgbG9nYXJpdGhtXG4gICAgICogQGRlc2NyaXB0aW9uICBwZXJmb3JtcyBsb2dhcml0aG0obG9nIGJhc2UgMTApIG9mIGEgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIGxvZygyKSB0byAwLjMwMTAyOTk5NTY2Mzk4MTJcbiAgICAgKi9cbiAgICBsb2dhcml0aG0oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TnVtYmVyID0gTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAoaW5wdXROdW1iZXIgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGgubG9nMTAoaW5wdXROdW1iZXIpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBuYXR1cmFsTG9nYXJpdGhtXG4gICAgICogQGRlc2NyaXB0aW9uICBwZXJmb3JtcyBuYXR1cmFsIGxvZ2FyaXRobShsbiBiYXNlIGUpIG9mIGEgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIGxuKDIpIHRvIDAuNjkzMTQ3MTgwNTU5OTQ1M1xuICAgICAqL1xuICAgIG5hdHVyYWxMb2dhcml0aG0oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TnVtYmVyID0gTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAoaW5wdXROdW1iZXIgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGgubG9nKGlucHV0TnVtYmVyKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgZGlzcGxheUVycm9yXG4gICAgICogQGRlc2NyaXB0aW9uICB0byBkaXNwbGF5IHRoZSBlcnJvciBhbmQgaGlkZSBpdCBhZnRlciAyIHNlY29uZHNcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGRpc3BsYXlFcnJvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvckRpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuZXhwb3J0cy5TZWNvbmRDYWxjdWxhdG9ySW1wbGVtZW50ID0gU2Vjb25kQ2FsY3VsYXRvckltcGxlbWVudDtcbmNsYXNzIFNlY29uZENhbGN1bGF0b3IxSW1wbGVtZW50IHtcbiAgICBpbnB1dDtcbiAgICBlcnJvckRpdjtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgZXJyb3JEaXYpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0KTtcbiAgICAgICAgdGhpcy5lcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVycm9yRGl2KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBjdWJlXG4gICAgICogQGRlc2NyaXB0aW9uICB0byBjYWxjdWxhdGUgdGhlIGN1YmUgb2YgYSBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gMl4zIHRvIDhcbiAgICAgKi9cbiAgICBjdWJlKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5wb3coTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpLCAzKS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGN1YmVSb290XG4gICAgICogQGRlc2NyaXB0aW9uICB0byBjYWxjdWxhdGUgdGhlIGN1YmUgcm9vdFxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBjdWJlUm9vdCgxMjUpIHRvIDVcbiAgICAgKiAtIGN1YmVSb290KC04KSB0byBFcnJvciFcbiAgICAgKi9cbiAgICBjdWJlUm9vdCgpIHtcbiAgICAgICAgY29uc3QgaW5wdXROdW1iZXIgPSBOdW1iZXIodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgIGlmIChpbnB1dE51bWJlciA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5jYnJ0KGlucHV0TnVtYmVyKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgcmFpc2VUbzJcbiAgICAgKiBAZGVzY3JpcHRpb24gIHRvIGNhbGN1bGF0ZSAyIHRvIHBvd2VyIG9mIGEgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIDJeNSB0byAzMlxuICAgICAqIC0gMl41NDUyNCB0byBJbmZpbml0eVxuICAgICAqL1xuICAgIHJhaXNlVG8yKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5wb3coMiwgTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGxvZ1BsdXNcbiAgICAgKiBAZGVzY3JpcHRpb24gIHRvIGNhbGN1bGF0ZSBsb2dhcml0aG0gb2YgMStwIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBsb2cxcCg4KSB0byAyLjE5NzIyNDU3NzMzNjIxOTZcbiAgICAgKi9cbiAgICBsb2dQbHVzKCkge1xuICAgICAgICBjb25zdCBpbnB1dE51bWJlciA9IE51bWJlcih0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLmxvZzFwKGlucHV0TnVtYmVyKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgZXhwTWludXNcbiAgICAgKiBAZGVzY3JpcHRpb24gIHRvIGNhbGN1bGF0ZSBlXngtMSB3aGVyZSB4IGlzIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSBleHBtMSgyKSB0byA2LjM4OTA1NjA5ODkzMDY1XG4gICAgICovXG4gICAgZXhwTWludXMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLmV4cG0xKE51bWJlcih0aGlzLmlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBlUmFpc2V4XG4gICAgICogQGRlc2NyaXB0aW9uICB0byBjYWxjdWxhdGUgZV54IHdoZXJlIHggaXMgbnVtYmVyXG4gICAgICogQHBhcmFtcyAgbm9uZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAtIGVeMiB0byA3LjM4OTA1NjA5ODkzMDY0OTVcbiAgICAgKi9cbiAgICBlUmFpc2V4KCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5wb3coTWF0aC5FLCBOdW1iZXIodGhpcy5pbnB1dC52YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgZGlzcGxheUVycm9yXG4gICAgICogQGRlc2NyaXB0aW9uICB0byBkaXNwbGF5IHRoZSBlcnJvciBhbmQgaGlkZSBpdCBhZnRlciAyIHNlY29uZHNcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGRpc3BsYXlFcnJvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvckRpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuZXhwb3J0cy5TZWNvbmRDYWxjdWxhdG9yMUltcGxlbWVudCA9IFNlY29uZENhbGN1bGF0b3IxSW1wbGVtZW50O1xuY2xhc3MgRXh0cmFGdW5jdGlvbkltcGxlbWVudCB7XG4gICAgaW5wdXQ7XG4gICAgZXJyb3JEaXY7XG4gICAgY29uc3RydWN0b3IoaW5wdXQsIGVycm9yRGl2KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCk7XG4gICAgICAgIHRoaXMuZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlcnJvckRpdik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgcGlcbiAgICAgKiBAZGVzY3JpcHRpb24gIGRpc3BsYXlzIHRoZSB2YWx1ZSBvZiBQSVxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSAzLjE0MTU5MjY1MzU4OTc5M1xuICAgICAqL1xuICAgIHBpKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5QSS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGV1bGVyXG4gICAgICogQGRlc2NyaXB0aW9uICBkaXNwbGF5cyB0aGUgdmFsdWUgb2YgRXVsZXIncyBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gMi43MTgyODE4Mjg0NTkwNDVcbiAgICAgKi9cbiAgICBldWxlcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IE1hdGguRS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGNsZWFyQWxsXG4gICAgICogQGRlc2NyaXB0aW9uICB0byBlbnRpcmVseSBjbGVhciB0aGUgaW5wdXQgZmllbGRcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICByZW1vdmVPbmVFbGVtZW50RnJvbUVuZFxuICAgICAqIEBkZXNjcmlwdGlvbiAgdG8gcmVtb3ZlIG9uZSBudW1iZXIgZnJvbSB0aGUgcmlnaHQgc2lkZSBlbmQgb25jZSBjbGlja2luZyBvbiBpdFxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSA1LjI4OTMgdG8gNS4yODlcbiAgICAgKi9cbiAgICByZW1vdmVPbmVFbGVtZW50RnJvbUVuZCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGJ5WFxuICAgICAqIEBkZXNjcmlwdGlvbiAgcGVyZm9ybXMgaW52ZXJzZSBvZiBhIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSAxLzIgdG8gMC41XG4gICAgICovXG4gICAgYnlYKCkge1xuICAgICAgICBjb25zdCB4ID0gTnVtYmVyKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gKDEgLyB4KS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gbW9kdWxvXG4gICAgICogQGRlc2NyaXB0aW9uIGV2YWx1YXRlcyB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlkaW5nIG9uZSBudW1iZXIgYnkgYW5vdGhlci5cbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gOSU3IHRvIDJcbiAgICAgKiAtIDIlMiB0byAwXG4gICAgICovXG4gICAgbW9kdWxvKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlICs9IFwiJVwiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIG1vZHVsdXNcbiAgICAgKiBAZGVzY3JpcHRpb24gIGV2YWx1YXRlcyB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgYSBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gLTYuMjM1ID0gNi4yMzVcbiAgICAgKi9cbiAgICBtb2R1bHVzKCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gTWF0aC5hYnMocGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uICBleHBvbmVudFxuICAgICAqIEBkZXNjcmlwdGlvbiAgZXZhbHVhdGVzIHRoZSB2YWx1ZSBvZiBFXngsIHdoZXJlIEUgaXMgRXVsZXIncyBudW1iZXJcbiAgICAgKiBAcGFyYW1zICBub25lXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqIC0gRV41IHRvIDE0OC40MTMxNTkxMDI1NzY2XG4gICAgICovXG4gICAgZXhwb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBNYXRoLmV4cCh4KS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gIGZhY3RvcmlhbFxuICAgICAqIEBkZXNjcmlwdGlvbiAgcGVyZm9ybXMgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSA1ISB0byAxMjBcbiAgICAgKi9cbiAgICBmYWN0b3JpYWwoKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yRGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5lcnJvckRpdi50ZXh0Q29udGVudCA9IFwiRXJyb3IhXCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bWJlciA9PSAwIHx8IG51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCIxXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlciAtIDE7IGkgPiAxOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXIgKiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IG51bWJlci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBmdW5jdGlvbiAgc2lnbkNoYW5nZVxuICAgICAqIEBkZXNjcmlwdGlvbiAgZ2l2ZXMgYSBudW1iZXIgd2l0aCBpdHMgb3Bwb3NpdGUgc2lnblxuICAgICAqIEBwYXJhbXMgIG5vbmVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogLSA3IHRvIC03XG4gICAgICovXG4gICAgc2lnbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcih0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICgteCkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLkV4dHJhRnVuY3Rpb25JbXBsZW1lbnQgPSBFeHRyYUZ1bmN0aW9uSW1wbGVtZW50O1xubGV0IG9iamVjdCA9IG5ldyBUcmlnb25vbWV0cnlDYWxjdWxhdG9ySW1wbGVtZW50KGlucHV0RmllbGQpO1xuY29uc29sZS5sb2cob2JqZWN0LnNpbmUoKSk7XG4vLyBleHBvcnQgaW50ZXJmYWNlIE1lbW9yeSB7XG4vLyAgIG1lbW9yeVN0YWNrOiBudW1iZXJbXTtcbi8vICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgIGJ1dHRvbkRpc2FibGVUb0FibGUoKTogdm9pZDtcbi8vICAgbWVtb3J5Q2xlYXIoKTogdm9pZDtcbi8vICAgbWVtb3J5UmVjYWxsKCk6IHZvaWQ7XG4vLyAgIG1lbW9yeUFkZCgpOiB2b2lkO1xuLy8gICBtZW1vcnlTdWJ0cmFjdCgpOiB2b2lkO1xuLy8gICBtZW1vcnlTYXZlKCk6IHZvaWQ7XG4vLyB9XG4vLyBleHBvcnQgY2xhc3MgTWVtb3J5SW1wbGVtZW50IGltcGxlbWVudHMgTWVtb3J5IHtcbi8vICAgbWVtb3J5U3RhY2s6IG51bWJlcltdID0gW107XG4vLyAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBidXR0b25EaXNhYmxlVG9BYmxlKCk6IHZvaWQge1xuLy8gICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1jXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuLy8gICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1yXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IGZhbHNlO1xuLy8gICB9XG4vLyAgIG1lbW9yeUNsZWFyKCk6IHZvaWQge1xuLy8gICAgIHRoaXMubWVtb3J5U3RhY2sgPSBbXTtcbi8vICAgfVxuLy8gICBtZW1vcnlSZWNhbGwoKTogdm9pZCB7XG4vLyAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMubWVtb3J5U3RhY2tbdGhpcy5tZW1vcnlTdGFjay5sZW5ndGggLSAxXS50b1N0cmluZygpO1xuLy8gICB9XG4vLyAgIG1lbW9yeUFkZCgpOiB2b2lkIHtcbi8vICAgICB0aGlzLmJ1dHRvbkRpc2FibGVUb0FibGUoKTtcbi8vICAgICBpZiAodGhpcy5tZW1vcnlTdGFjay5sZW5ndGggPT09IDEpIHtcbi8vICAgICAgIHRoaXMubWVtb3J5U3RhY2sucHVzaChwYXJzZUludCh0aGlzLmlucHV0LnZhbHVlKSk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHRoaXMubWVtb3J5U3RhY2tbdGhpcy5tZW1vcnlTdGFjay5sZW5ndGggLSAxXSArPSBwYXJzZUludChcbi8vICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgbWVtb3J5U3VidHJhY3QoKTogdm9pZCB7XG4vLyAgICAgdGhpcy5idXR0b25EaXNhYmxlVG9BYmxlKCk7XG4vLyAgICAgaWYgKHRoaXMubWVtb3J5U3RhY2subGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICB0aGlzLm1lbW9yeVN0YWNrLnB1c2goLTEgKiBwYXJzZUludCh0aGlzLmlucHV0LnZhbHVlKSk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHRoaXMubWVtb3J5U3RhY2tbdGhpcy5tZW1vcnlTdGFjay5sZW5ndGggLSAxXSAtPSBwYXJzZUludChcbi8vICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgbWVtb3J5U2F2ZSgpOiB2b2lkIHtcbi8vICAgICB0aGlzLmJ1dHRvbkRpc2FibGVUb0FibGUoKTtcbi8vICAgICBpZiAodGhpcy5tZW1vcnlTdGFjay5sZW5ndGggPT09IDApIHtcbi8vICAgICAgIHRoaXMubWVtb3J5U3RhY2sucHVzaChwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgdGhpcy5tZW1vcnlTdGFjay5wdXNoKHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSkpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGFuZ2VEcm9wZG93biA9IGV4cG9ydHMuY2FsY3VsYXRlID0gZXhwb3J0cy5tb2R1bHVzRnVuY3Rpb24gPSBleHBvcnRzLnJhbmRvbUZ1bmN0aW9uID0gZXhwb3J0cy5jZWlsRnVuY3Rpb24gPSBleHBvcnRzLmZsb29yRnVuY3Rpb24gPSBleHBvcnRzLmNvc2VjYW50RnVuY3Rpb24gPSBleHBvcnRzLnNlY2FudEZ1bmN0aW9uID0gZXhwb3J0cy5jb3RhbmdlbnRGdW5jdGlvbiA9IGV4cG9ydHMudGFuZ2VudEZ1bmN0aW9uID0gZXhwb3J0cy5jb3NpbmVGdW5jdGlvbiA9IGV4cG9ydHMuc2luZUZ1bmN0aW9uID0gZXhwb3J0cy5kZWdyZWVUb1JhZGlhbiA9IGV4cG9ydHMuZml4ZWRUb0V4cG9uZW50ID0gZXhwb3J0cy5kaXNwbGF5SW5wdXRWYWx1ZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzMTFfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsczExXCIpO1xuY29uc3QgdXRpbHMxMV8yID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzMTFcIik7XG5jb25zb2xlLmxvZygoMCwgdXRpbHMxMV8yLm15RnVuY3Rpb24pKCksICc8PGZ1bmMnKTtcbi8vIGNvbnN0IG5ld09iaiA9IG5ldyBNeUNsYXNzKCk7XG4vL2FycmF5IHRvIHBlcmZvcm0gdGhlIG1lbW9yeSBvcGVyYXRpb25zXG5sZXQgbWVtb3J5U3RhY2sgPSBbXTtcbi8vIHZhcmlhYmxlIHVzZWQgdG8gdG9nZ2xlIGJldHdlZW4gZGVncmVlIGFuZCByYWRpYW4gYnV0dG9uc1xubGV0IGRlZ3JlZSA9IDA7XG4vLyBjb25zb2xlLmxvZygpXG4vLyBmb3IgY2hhbmdpbmcgdGhlIGRyb3Bkb3duc1xubGV0IGRyb3Bkb3duQ2hhbmdlID0gMDtcbi8vdG8gdGFrZSB0aGUgaW5wdXRcbmNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuLyoqXG4gKiBAZnVuY3Rpb24gZGlzcGxheUlucHV0VmFsdWVcbiAqIEBkZXNjcmlwdGlvbiB0byB0YWtlIHRoZSBpbnB1dCBmcm9tIHRoZSBpbnB1dCBmaWVsZCBlbnRlcmVkIGJ5IHRoZSB1c2VyIGFuZCBkaXNwbGF5IGl0IG9uIHRoZSBkaXNwbGF5IGJhclxuICogQHBhcmFtIHZhbHVlXG4gKiB2YWx1ZSA6IHN0cmluZ1xuICogQHJldHVybnMgdm9pZFxuICovXG5mdW5jdGlvbiBkaXNwbGF5SW5wdXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlucHV0RmllbGQudmFsdWUgKz0gdmFsdWU7XG59XG5leHBvcnRzLmRpc3BsYXlJbnB1dFZhbHVlID0gZGlzcGxheUlucHV0VmFsdWU7XG4vKipcbiAqIEBmdW5jdGlvbiBmaXhlZFRvRXhwb25lbnRcbiAqIEBkZXNjcmlwdGlvbiB0byBkaXNwbGF5IHRoZSBhbnN3ZXIgaW4gc2NpZW50aWZpYyBub3RhdGlvblxuICogQHBhcmFtIG5vbmVcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZnVuY3Rpb24gZml4ZWRUb0V4cG9uZW50KCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSkudG9FeHBvbmVudGlhbCgpLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmZpeGVkVG9FeHBvbmVudCA9IGZpeGVkVG9FeHBvbmVudDtcbi8qKlxuICogQGZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuXG4gKiBAZGVzY3JpcHRpb24gIHRvIHRvZ2dsZSB0aGUgYnV0dG9uIGJldHdlZW4gZGVncmVlKERFRykgYW5kIHJhZGlhbihSQUQpXG4gKiBAcGFyYW1zICBub25lXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuKCkge1xuICAgIC8vIGlmIHRoZSBkZWdyZWUgdmFyaWFibGUgaXMgc2V0IHRvIDAsIHRoZW4gZGlzcGxheSB0aGUgUkFEKHJhZGlhbikgYnV0dG9uIGVsc2UgREVHKGRlZ3JlZSkgYnV0dG9uXG4gICAgaWYgKGRlZ3JlZSA9PT0gMCkge1xuICAgICAgICBkZWdyZWUgPSAxO1xuICAgICAgICBjb25zdCBkZWdyZWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWdyZWVcIik7XG4gICAgICAgIGRlZ3JlZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJSQURcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZ3JlZSA9IDA7XG4gICAgICAgIGNvbnN0IGRlZ3JlZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlZ3JlZVwiKTtcbiAgICAgICAgZGVncmVlRWxlbWVudC5pbm5lckhUTUwgPSBcIkRFR1wiO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVncmVlVG9SYWRpYW4gPSBkZWdyZWVUb1JhZGlhbjtcbi8qKlxuICogQGRlc2NyaXB0aW9uICB2YWxpZGF0aW5nIHRvIHJlc3RyaWN0IHRoZSBhbHBoYWJldHMgYW5kIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQgZmllbGQgdXNpbmcgZXZlbnQgbGlzdGVuZXIgYmFzZWQgb24gdGhlIEFTQ0lJIGNvZGVcbiAqIEV4YW1wbGVzOiBpZiB0aGUgdXNlciBlbnRlcnMgYWxwaGFiZXRzIG9yIHNwZWNpYWwgY2hhcmFjdGVycyBmcm9tIGtleWJvYXJkLCB0aGVuIHJlc3RyaWN0IGl0IGZyb20gZW50ZXJpbmcgaW50byB0aGUgaW5wdXQgZmllbGRcbiAqIC0gYXNmaGprIHRvIDBcbiAqIC0gIyY7fSB0byAwXG4gKiAtIDU4NjkqMiB0byA1ODY5KjJcbiAqL1xuaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgYWxsb3dlZEtleUNvZGVzID0gW1xuICAgICAgICBcIjMzXCIsXG4gICAgICAgIFwiMzRcIixcbiAgICAgICAgXCIzNVwiLFxuICAgICAgICBcIjM2XCIsXG4gICAgICAgIFwiMzhcIixcbiAgICAgICAgXCIzOVwiLFxuICAgICAgICBcIjU4XCIsXG4gICAgICAgIFwiNTlcIixcbiAgICAgICAgXCI2MFwiLFxuICAgICAgICBcIjYxXCIsXG4gICAgICAgIFwiNjJcIixcbiAgICAgICAgXCI2M1wiLFxuICAgICAgICBcIjY0XCIsXG4gICAgICAgIFwiOTFcIixcbiAgICAgICAgXCI5MlwiLFxuICAgICAgICBcIjkzXCIsXG4gICAgICAgIFwiOTVcIixcbiAgICAgICAgXCI5NlwiLFxuICAgICAgICBcIjEyM1wiLFxuICAgICAgICBcIjEyNFwiLFxuICAgICAgICBcIjEyNVwiLFxuICAgICAgICBcIjEyNlwiLFxuICAgIF07XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gNjU7IGkgPD0gOTA7IGkrKykge1xuICAgICAgICBhbGxvd2VkS2V5Q29kZXMucHVzaChpLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBmb3IgKGkgPSA5NzsgaSA8PSAxMjI7IGkrKykge1xuICAgICAgICBhbGxvd2VkS2V5Q29kZXMucHVzaChpLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZS50b1N0cmluZygpO1xuICAgIGlmIChhbGxvd2VkS2V5Q29kZXMuaW5kZXhPZihrZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG4vLyBjb25zdCBvYmogPSBuZXcgVHJpZ29ub21ldHJ5Q2FsY3VsYXRvckltcGxlbWVudChpbnB1dEZpZWxkKTtcbmNvbnN0IHV0aWxzMTFfMyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsczExXCIpO1xuY29uc3Qgc2luZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG9iai5kZWdyZWUsIFwiPDxkZWdyZWVcIik7XG4gICAgLy8gb2JqLnNpbmUoKTtcbn07XG5leHBvcnRzLnNpbmVGdW5jdGlvbiA9IHNpbmVGdW5jdGlvbjtcbmNvbnN0IGNvc2luZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIHV0aWxzMTFfMy5vYmouY29zaW5lKCk7XG59O1xuZXhwb3J0cy5jb3NpbmVGdW5jdGlvbiA9IGNvc2luZUZ1bmN0aW9uO1xuY29uc3QgdGFuZ2VudEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIHV0aWxzMTFfMy5vYmoudGFuZ2VudCgpO1xufTtcbmV4cG9ydHMudGFuZ2VudEZ1bmN0aW9uID0gdGFuZ2VudEZ1bmN0aW9uO1xuY29uc3QgY290YW5nZW50RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdXRpbHMxMV8zLm9iai5jb3RhbmdlbnQoKTtcbn07XG5leHBvcnRzLmNvdGFuZ2VudEZ1bmN0aW9uID0gY290YW5nZW50RnVuY3Rpb247XG5jb25zdCBzZWNhbnRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICB1dGlsczExXzMub2JqLnNlY2FudCgpO1xufTtcbmV4cG9ydHMuc2VjYW50RnVuY3Rpb24gPSBzZWNhbnRGdW5jdGlvbjtcbmNvbnN0IGNvc2VjYW50RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdXRpbHMxMV8zLm9iai5jb3NlY2FudCgpO1xufTtcbmV4cG9ydHMuY29zZWNhbnRGdW5jdGlvbiA9IGNvc2VjYW50RnVuY3Rpb247XG5jb25zdCBvYmoyID0gbmV3IHV0aWxzMTFfMS5GdW5jdGlvbkNhbGN1bGF0b3JJbXBsZW1lbnQoaW5wdXRGaWVsZCk7XG5jb25zdCBmbG9vckZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajIuZmxvb3IoKTtcbn07XG5leHBvcnRzLmZsb29yRnVuY3Rpb24gPSBmbG9vckZ1bmN0aW9uO1xuY29uc3QgY2VpbEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajIuY2VpbCgpO1xufTtcbmV4cG9ydHMuY2VpbEZ1bmN0aW9uID0gY2VpbEZ1bmN0aW9uO1xuY29uc3QgcmFuZG9tRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqMi5yYW5kb20oKTtcbn07XG5leHBvcnRzLnJhbmRvbUZ1bmN0aW9uID0gcmFuZG9tRnVuY3Rpb247XG5jb25zdCBtb2R1bHVzRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqMi5tb2R1bHVzKCk7XG59O1xuZXhwb3J0cy5tb2R1bHVzRnVuY3Rpb24gPSBtb2R1bHVzRnVuY3Rpb247XG4vKipcbiAqIEBmdW5jdGlvbiAgY2FsY3VsYXRlXG4gKiBAZGVzY3JpcHRpb24gIHRvIGV2YWx1YXRlIHRoZSBiYXNpYyBleHByZXNzaW9uc1xuICogQHBhcmFtcyAgbm9uZVxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZUFsbChcIl5cIiwgXCIqKlwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IGlucHV0LnZhbHVlO1xuICAgIC8vIEVycm9yIGhhbmRsaW5nXG4gICAgLyoqXG4gICAgICogdGhpcyB0cnkgY2F0Y2ggaGFuZGxlcyB0aGUgZXJyb3Igd2hlbiB1c2VyIGVudGVycyBpbnZhbGlkIGlucHV0XG4gICAgICogRXhhbXBsZXM6XG4gICAgICogOS02KzUgPSA4XG4gICAgICogNS02LzUqID0gSW52YWxpZCBJbnB1dCFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYWwodXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiICsgdXNlcikoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gZnVuY3Rpb24gY2FsKHVzZXI6IHN0cmluZykge1xuICAgICAgICAvLyAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gXCIgKyB1c2VyKSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGNhbChgJHtyZXN1bHR9YCk7XG4gICAgICAgIGNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dEVsLnZhbHVlID0gb3V0cHV0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgZXJyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvckRpdlwiKTtcbiAgICAgICAgZXJyRGl2LnRleHRDb250ZW50ID0gXCJJbnZhbGlkIElucHV0IVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVyckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBpbnB1dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0RWwudmFsdWUgPSBcIlwiO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcbi8qKlxuICogQGZ1bmN0aW9uICBjaGFuZ2VEcm9wZG93blxuICogQGRlc2NyaXB0aW9uICB0byB0b2dnbGUgdGhlIGJ1dHRvbnNcbiAqIEBwYXJhbXMgIG5vbmVcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZnVuY3Rpb24gY2hhbmdlRHJvcGRvd24oZGlzcGxheTEsIGRpc3BsYXkyKSB7XG4gICAgbGV0IGRyb3Bkb3duQ2hhbmdlID0gMTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzMiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRpc3BsYXkyXCIpKTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMxID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGlzcGxheTFcIikpO1xuICAgICAgICBpZiAoZHJvcGRvd25DaGFuZ2UgPT09IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzMi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudHMxLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZHJvcGRvd25DaGFuZ2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudHMxLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50czIuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcm9wZG93bkNoYW5nZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcIik7XG4gICAgfVxufVxuZXhwb3J0cy5jaGFuZ2VEcm9wZG93biA9IGNoYW5nZURyb3Bkb3duO1xuY29uc3Qgb2JqMyA9IG5ldyB1dGlsczExXzEuU2Vjb25kQ2FsY3VsYXRvckltcGxlbWVudChcImlucHV0XCIsIFwiZXJyb3JEaXZcIik7XG5jb25zdCBzcXVhcmVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmozLnNxdWFyZSgpO1xufTtcbmNvbnN0IHNxdWFyZVJvb3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmozLnNxdWFyZVJvb3QoKTtcbn07XG5jb25zdCB4UmFpc2VZRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqMy54UmFpc2VZKCk7XG59O1xuY29uc3QgcmFpc2VUbzEwRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqMy5yYWlzZVRvMTAoKTtcbn07XG5jb25zdCBsb2dhcml0aG1GdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmozLmxvZ2FyaXRobSgpO1xufTtcbmNvbnN0IG5hdHVyYWxMb2dhcml0aG1GdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmozLm5hdHVyYWxMb2dhcml0aG0oKTtcbn07XG5jb25zdCBvYmo0ID0gbmV3IHV0aWxzMTFfMS5TZWNvbmRDYWxjdWxhdG9yMUltcGxlbWVudChcImlucHV0XCIsIFwiZXJyb3JEaXZcIik7XG5jb25zdCBjdWJlRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNC5jdWJlKCk7XG59O1xuY29uc3QgY3ViZVJvb3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmo0LmN1YmVSb290KCk7XG59O1xuY29uc3QgcmFpc2VUbzJGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmo0LnJhaXNlVG8yKCk7XG59O1xuY29uc3QgbG9nUGx1c0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajQubG9nUGx1cygpO1xufTtcbmNvbnN0IGV4cE1pbnVzRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNC5leHBNaW51cygpO1xufTtcbmNvbnN0IGVSYWlzZXhGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBvYmo0LmVSYWlzZXgoKTtcbn07XG5jb25zdCBvYmo1ID0gbmV3IHV0aWxzMTFfMS5FeHRyYUZ1bmN0aW9uSW1wbGVtZW50KFwiaW5wdXRcIiwgXCJlcnJvckRpdlwiKTtcbmNvbnN0IHBpRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5waSgpO1xufTtcbmNvbnN0IGV1bGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5ldWxlcigpO1xufTtcbmNvbnN0IGNsZWFyQWxsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5jbGVhckFsbCgpO1xufTtcbmNvbnN0IHJlbW92ZU9uZUVsZW1lbnRGcm9tRW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5yZW1vdmVPbmVFbGVtZW50RnJvbUVuZCgpO1xufTtcbmNvbnN0IGJ5WEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajUuYnlYKCk7XG59O1xuY29uc3QgbW9kdWxvRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5tb2R1bG8oKTtcbn07XG5jb25zdCBtb2R1bHVzRnVuY3Rpb24xID0gKCkgPT4ge1xuICAgIG9iajUubW9kdWx1cygpO1xufTtcbmNvbnN0IGV4cG9uZW50RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgb2JqNS5leHBvbmVudCgpO1xufTtcbmNvbnN0IGZhY3RvcmlhbEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajUuZmFjdG9yaWFsKCk7XG59O1xuY29uc3Qgc2lnbkNoYW5nZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIG9iajUuc2lnbkNoYW5nZSgpO1xufTtcbi8vIGltcG9ydCB7IE1lbW9yeUltcGxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsczExXCI7XG4vLyBjb25zdCBvYmo2ID0gbmV3IE1lbW9yeUltcGxlbWVudCgpO1xuLy8gY29uc3QgbWVtb3J5Q2xlYXJGdW5jdGlvbiA9ICgpID0+IHtcbi8vICAgb2JqNi5tZW1vcnlDbGVhcigpO1xuLy8gfTtcbi8vIGNvbnN0IG1lbW9yeVJlY2FsbEZ1bmN0aW9uID0gKCkgPT4ge1xuLy8gICBvYmo2Lm1lbW9yeVJlY2FsbCgpO1xuLy8gfTtcbi8vIGNvbnN0IG1lbW9yeUFkZEZ1bmN0aW9uID0gKCkgPT4ge1xuLy8gICBvYmo2Lm1lbW9yeUFkZCgpO1xuLy8gfTtcbi8vIGNvbnN0IG1lbW9yeVN1YnRyYWN0RnVuY3Rpb24gPSAoKSA9PiB7XG4vLyAgIG9iajYubWVtb3J5U3VidHJhY3QoKTtcbi8vIH07XG4vLyBjb25zdCBtZW1vcnlTYXZlRnVuY3Rpb24gPSAoKSA9PiB7XG4vLyAgIG9iajYubWVtb3J5U2F2ZSgpO1xuLy8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==