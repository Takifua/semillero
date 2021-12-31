///////// ejercicio 1 //////////    https://leetcode.com/problems/longest-common-prefix/    x
var a = strs[0];
var x = a.charAt(0)
var y = a.charAt(1)
for (var i = 1; i < strs.length; i++) {
    a = strs[i];
    if (x === a.charAt(0) && y === a.charAt(1)) {
        return (x + y);
    } else return ("");
}

///////// ejercicio 2 //////////    https://leetcode.com/problems/merge-two-sorted-lists/   x
for (var i = 0; i < lista1.length; i++) {
    var a = lista1[i];
    var b = lista2[i];
    //console.log (a);
    //console.log (b);
    var out = out + (a + "," + b + ",");
}
console.log("[" + out + "]");

///////// ejercicio 3 //////////    https://leetcode.com/problems/remove-duplicates-from-sorted-array/  x

for (i = 0; i < nums.length; i++) {
    //var c = c++;
    var a = nums[i + 1];
    var b = nums[i];
    if (a === b) {
        nums.splice(i, 1);
        i = 0;
    }
}
//nums.splice (0,1);
console.log(nums);

///////// ejercicio 4 //////////    https://leetcode.com/problems/remove-element/   x

for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        nums.splice(i, 1);
        i = 0;
    } else {

    }
}

///////// ejercicio 4 //////////    https://leetcode.com/problems/search-insert-position/ (no logre hacerlo)

for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
        console.log(nums.indexOf(nums[i]));
    } else if (target > nums[i] && target < nums[i + 1]) {
        console.log(nums.indexOf(nums[i + 1]));
    }
}

///////// ejercicio 5 //////////    https://leetcode.com/problems/plus-one/ (falta un caso)

var a = digits.length - 1;
var aa = digits.length;
var b = digits[a] + 1;
var bb = digits[0];
var i = 0;

if (aa === 1 && bb === 9) {
    digits.splice(0, 1, 1, 0);
} else {
    digits.splice(a, 1, b);
    console.log(digits);
}

if (b === 10) {
    for (i = 0; i < digits.length; i++) {
        if (digits[i] === 10) {
            var e = digits[i];
            var d = e % 10;
            digits.splice(i - 1, 2, digits[i - 1] + 1, d);
            i = 0;
        } else if (digits[0] === 10) {
            digits.splice(i - 1, 1, 1, d);
        }
    }
}
return (digits);

///////// ejercicio 6 //////////    https://leetcode.com/problems/sqrtx/    x

x = parseInt(x ** 0.5);
return (x);

///////// ejercicio 7 //////////    https://leetcode.com/problems/same-tree/

var a = [1, 2, 3];
var b = [1, 2, 3];
var f = false;

for (var i = 0; i < a.length; i++) {
    var c = a[i];
    var d = b[i];
    if (c !== d) {
        i = 4
        f = false
    } else {
        f = true
    }
}
return (f);

///////// ejercicio 7 //////////    https://leetcode.com/problems/remove-linked-list-elements/

var hed = [7, 7, 7, 7];
for (var i = 0; i < hed.length; i++) {
    if (hed[i] === val) {
        hed.splice(i, 1);
        i = -1;
    }
}
console.log(hed);


////////// Ejercicio de Omar ///////////    https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

 function isOpen(c) {
    return c === '{' || c === '(' || c === '['
}

function abre(c) {
    if (c === ']') {
        return '['
    }
    if (c === '}') {
        return '{'
    }
    if (c === ')') {
        return '('   
    }
}



var isValid = function(s) {
    var memoria = []
    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        if (isOpen(c)) {
            memoria.push(c)
        } else {
            var cualquierocerrar = memoria.pop()
            var cualabre = abre(c)
            if (cualabre !== cualquierocerrar) {
                return false
            }
        }
    }
    return memoria.length === 0
    
};


///////// ejercicio 8 ////////// https://leetcode.com/problems/contains-duplicate/submissions/

var map = new Map();
var a = false;
for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    var contadorN = (map.get(n) || 0) + 1;
    map.set(n, contadorN);
    if (contadorN > 1) {
        a = true;
        console.log (a);
    }
}
return a;


///////// ejercicio 9 ////////// https://leetcode.com/problems/power-of-two/submissions/

var a = false;
for (var i = 0; i < 100; i++) {
    var num = Math.pow(2,i);
    if (n === num) {
        a = true;
    }
}
return a;

/////////////////////

if (n <= 0) {
    return false;
}
while (n > 1) {
    if (n % 2 !== 0) {
        return false;
        break;
        }
    n = n / 2;
}
return true;


///////// ejercicio 10 ///////// https://leetcode.com/problems/move-zeroes/submissions/

var x = nums.length;
var memoria = 0;
for (var i = 0; i < x; i++) {
    if (nums[i] === 0) {
        nums.splice(i, 1);
        memoria ++;
        i = -1;
    }
    }
if (memoria > 0) {
    for (var j = 1; j <= memoria; j++) {
        console.log(j);
        nums.splice(x, 0, 0);
    }   
}

///////// ejercicio 11 ///////// https://leetcode.com/problems/power-of-three/submissions/

var a = false;
for (var i = 0; i < 100; i++) {
    var num = Math.pow(3,i);
    if (num === n) {
        a = true;
    }
}
return a;

///////// ejercicio 12 ///////// https://leetcode.com/problems/reverse-string/submissions/

var size = (s.length - 1);
var revert = [];
var pasa = 0;
for (var i = size; i > -1; i--){
    var letra = s[i];
    s.splice(i,1);
    revert.splice(pasa, 0, letra);
    pasa++;
}
for (var i = 0; i < revert.length; i++) {
    s.splice(i,0,revert[i]);
}

///////// ejercicio 13 ///////// https://leetcode.com/problems/can-place-flowers/submissions/

var flowerpod = 0;
for(var i = 0; i < flowerbed.length; i++) {
    var pod0 = flowerbed[i-1];
    var pod1 = flowerbed[i];
    var pod2 = flowerbed[i+1];
    if (pod0 === 0 && pod1 === 0 && pod2 === 0) {
            flowerpod++;
            i += 1;
        }
    if (pod0 === undefined && pod1 === 0 && pod2 === 0) {
        flowerpod++;
        i +=1;
    }
    if (pod0 === 0 && pod1 === 0 && pod2 === undefined) {
        flowerpod++;
        i +=1;
    }
    if (pod0 === undefined && pod1 === 0 && pod2 === undefined) {
        flowerpod++;
        i +=1;
    }
}
return flowerpod >= n;

