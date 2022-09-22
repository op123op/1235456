// var canConstruct = function(ransomNote, magazine) {
//     var flag=false;
//     var arr='';
//     for(var i=0;i<ransomNote.length;i++){
//         var chars= ransomNote[i];
//         for(var j=0;j<magazine.length;j++){
//             if(magazine[j]==chars){
//                 arr=arr+magazine[j]
//                 magazine=magazine.replace(magazine[j],'')
//                 break;
//             }
//         }
//     }
//     if(arr==ransomNote)
//     {
//         flag=true;
//     }
//     return arr;
// };
// console.log(canConstruct('aa','ab'));

var buddyStrings = function(A, B) {
    var LenA = A.length;
    var LenB = B.length;
    // 长度不等 false
    if (A.length !== B.length) { return false; }
    // 如果字符串相等，看字符串中相同的字符个数是否>=2
    if (A === B) {
        // 求A中相同字符的个数
        return A.length - (new Set(A.split('')).size) >= 1;
    }
    // 如果字符串不等，看不同的部分字符个数是否==2
    var diffsA = [];
    var diffsB = [];
    for (var i = 0; i < LenA; i ++) {
        if (A[i] !== B[i]) {
            diffsA.push(A[i]);
            diffsB.push(B[i]);
        }
    }
    if (diffsA.length !== 2) { return false; }
    return diffsA.join('') === diffsB.reverse().join('');
};