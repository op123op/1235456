/* console.log('11')
var flag=false;
var flag1=flag+1;
console.log(flag1); */
// var myname=prompt('请输入你的姓名：');
// var age=prompt('请输入你的年龄：');
// var sex=prompt('请输入你的性别：');
// alert('你的姓名为'+myname+'\n你的年龄为'+age*1+'\n你的性别为'+sex);

// var hide=document.getElementById('ul');
// firstNav.onclick(function(){
//     hide.toggle();
// })

//求学生成绩案例
// var sum=0;
// var avg=0;
// var pepl=0;
// var number=prompt('请输入学生人数')*1;
// for (let i = 1; i <= number; i++) {
//     var cheJi=prompt('请输入第'+i+'位同学的成绩')*1;
//     sum+=cheJi;
//     if(i>=number){
//         avg=sum/i
//         pepl=i;
//     }
// }
// alert('总成绩为'+sum);
// alert(pepl+'位平均成绩为'+avg);

//倒三角形
// var score='';
// for (let index = 10; index>=1; index--) {
//     for (let i = 1; i <= index; i++) {
//         score+='☆';
//     }
//     score+='\n'
// }
// console.log(score);

// 正三角形
// var score='';
// for (let index = 1; index<=10; index++) {
//     for (let i = 1; i <= index; i++) {
//         score+='☆';
//     }
//     score+='\n'
// }
// console.log(score);

//九九乘法表
// var sum='';
// for (let index = 1; index <=9; index++) {
//     for (let i= 1; i <=index; i++) {
//         sum+=(i+'×'+index+'='+i*index+'\t');
//     }
//     sum+='\n';
// }
// console.log(sum);

//ATM
// var score='';
// var moenry=100;
// do {
//     score=prompt('请输入你要的操作\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
//     if(score==1||score=='存钱'){
//         var cunQian=parseInt(prompt());
//         moenry+=cunQian;
//     }
//     if(score==2||score=='取钱'){
//         var quQian=parseInt(prompt());
//         if(moenry<quQian){
//             alert('余额不足');
//         }else{
//             moenry-=quQian;
//         }
//     }
//     if(score==3||score=='余额'){
//         alert('您的余额为'+moenry);
//     }
// } while (score!=='退出'&&score!=='4');
// alert('您正在退出....')

// function toggle(obj){
//     if(document.defaultView.getComputedStyle(obj,null).display=='none'){
//         obj.style.display='block';
//     }else if(document.defaultView.getComputedStyle(obj,null).display=='block'){
//         obj.style.display='none';
//     }
// }
//     var li1=document.querySelector('.jlbbyk');
//     var firstNav=document.querySelector('.firstNav');
//     var ul=document.querySelector('#ul');
//     firstNav.onclick=function(){
//         toggle(ul);
//     }

//简易计算机
// function suanShu(){
//     var sum1=prompt('请输入一个数');
//     var sum2=prompt('请输入一个数');
//     var suanShu=prompt('请输入一个运算符(+ - x /)');
//     switch(suanShu){
//         case 'x':
//             var sum= sum1*sum2;
//             alert('两个数的乘数为'+sum);
//             break;
//         case '/':
//             var sum= sum1/sum2;
//             alert('两个数的相除为'+sum);
//             break;
//         case '+':
//             var sum= sum1+sum2;
//             alert('两个数的相加为'+sum);
//             break;  
//         case '-':
//             var sum= sum1-sum2;
//             alert('两个数的相减为'+sum);
//             break;    
//     }
// }
// suanShu();

//比较两个数的最大数的函数
// function maxSum(){
//     var max=0;
//     var sum1=prompt('输入一个数');
//     var sum2=prompt('输入第二个数');
//     if(sum1>sum2){
//         max=sum1;
//     }else{
//         max=sum2
//     }
//     return max;
// }
// alert('两个数的最大数为'+maxSum());

//比较三个数的最大数的函数
// function maxSum(){
//     var max=0;
//     var arr=[prompt('输入一个数'),prompt('输入第二个数'),prompt('输入第三个数')];
//     for (let index = 0; index <arr.length; index++) {
//         for (let j = 0; j <arr.length-1-index; j++) {
//             if(arr[j]>arr[j+1]){
//                     max=arr[j];
//                     arr[j]=arr[j+1];
//                     arr[j+1]=max;
//             }
//         }
//             max= arr[arr.length-1];
//     }
//     console.log(arr);
//     return max;
    
// }
// alert('三个数的最大数为'+maxSum());

//判断一个数是不是素数的函数
// function suShu(){
//     var sum=prompt('输入一个数');
//     var sum1=1;
//     for (let index = 2; index <= sum-1; index++) {
//         sum1*=sum%index;
//     }
//     if(sum1!=0&&sum>0){
//         alert(sum+'是素数')
//     }else{
//         alert('不是素数');
//     }    
// }
// suShu()

//1到100的素数
// for (let index = 1; index <= 100; index++) {
//     var sum1=1;
//     for (let i = 2; i <= index-1; i++) {
//        sum1*=index%i;
//     }
//     if(sum1!=0&&index!=1){
//         document.write(index+" ");
//     }
// }

//实现数组的反转
// function reverse(arr){
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         arr1[i]=arr[arr.length-1-i];
//     }
//     return arr1;
// }
// console.log(reverse([1,5,6,2,3,8]));

//实现数组的排序
// function sort(arr){
//     for (let index = 0; index < arr.length; index++) {
//         for (let i = 0; i < arr.length-1-index; i++) {
//             if(arr[i]>arr[i+1]){
//                 var max=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=max;
//             }
            
//         }
        
//     }
//     return arr;
// }
// console.log(sort([2,6,5,3,1,9,8,5,4]));


// //
// var obj={
//     '1':function(){
//         var num=prompt('请输入第一个数')*1;
//         var num1=prompt('请输入第二个数')*1;
//         var sum=num+num1;
//         alert(sum);
//     },
//     '2':function(){
//         var num=prompt('请输入第一个数')*1;
//         var num1=prompt('请输入第二个数')*1;
//         var sum=num-num1;
//         alert(sum);
//     },
//     '3':function(){
//         var num=prompt('请输入第一个数')*1;
//         var num1=prompt('请输入第二个数')*1;
//         var sum=num*num1;
//         alert(sum);
//     },
//     '4':function(){
//         var num=prompt('请输入第一个数')*1;
//         var num1=prompt('请输入第二个数')*1;
//         var sum=num/num1;
//         alert(sum);
//     },
//     '':function(){

//     },
//     null:function(){}
// }
// for (let index = 0; ; index++) {
//     var num=prompt('欢迎使用简易计算机：\n1.加法运算\n2.减法运算\n3.乘法运算\n4.除法运算\n5.退出\n请输入你的选项:');
//     if(num==5){
//         break;
//     }
//     obj[num]();
// }


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
//   }
//   console.log(getRandomIntInclusive(5,60));


//倒计时
// function countDown(time) {
// var nowTime = +new Date();//返回的是当前时间总的毫秒数
// var inputTime = +new Date(time);//返回的是用户输入时间总的毫秒数
// var times = (inputTime - nowTime)/ 1000; // times是剩余时间总的秒数
// var d = parseInt(times / 60/ 60 / 24);//天
// var h = parseInt(times / 60/ 60 % 24);//时
// var m = parseInt(times / 60 % 60);//分
// var s = parseInt(times % 60);//当前的秒
// return d +'天'+h+'时'+m +'分'+s +'秒';
// }
// console.log(countDown('2022-9-20 18:00:00'));var date = new Date();
// console.log(date);


//
// function getarr(a,b){
//     var a1=0;
//     var num=0;
//     var arr=[];
//     for (let index = 0; ; index++) {
//         if(a.indexOf(b,a1)==-1){break;}
//         arr[index]=a.indexOf(b,a1);
//         a1=a.indexOf(b,a1)+1;
//         num++
//     }
//     return "这个元素出现的次数为："+num+",这个元素索引为："+arr
// }
// console.log(getarr(['red','dfjk','green','wite','red','red','ewed','lll','red'],'red'));


//判断一个字符串出现最多的字符，并统计其次数
// function getchar(a){
//     var obj={};
//     var arr=[];
//     var max=0;
//     var char='';
//     for (let index = 0; index < a.length; index++) {
//         var char=a.charAt(index);
//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char]=1
//         }
//     }
//     for (const key in obj) {
//         if(obj[key]>max){
//             max=obj[key];
//             char=key
//         }

//     }

//     return '出现最多的字符为'+char+',次数为：'+max;
// }
// console.log(getchar('hgieojgoewjrkfoa'));


//4、替换指定的字符，如︰g替换为22,ss替换为b等操作方法
// var chars='isjjsjsnjib66698op';
// while (chars.indexOf('j')!=-1||chars.indexOf('66')!=-1) {
//     chars=chars.replace('j',22);
//     chars=chars.replace('66',12)
// }
// console.log(chars)


//5、截取指定开始位置到结束位置的字符串，如:取得1-5的字符串
// var chars='isjjsjsnjib66698op';
// console.log(chars.slice(0,5));

//6、找出以上字符串中出现次数最多的字符和出现的次数
// var chars='isjjsjsnjib66698op';
// var obj={};
// var ch='';
// var max=0;
// for (let index = 0; index < chars.length; index++) {
//     var ch1=chars.charAt(index);
//     if(obj[ch1]){
//         obj[ch1]++;
//     }else{
//         obj[ch1]=1;
//     }
// }
// for (const key in obj) {
//     if(obj[key]>max){
//         max=obj[key];
//         ch=key
//     }
// }
// console.log(ch+max);

// var findLeastNumOfUniqueInts = function(arr, k) {
    
//     var obj={};
//     var chars='';
//     for(var i=0;i<arr.length;i++){
//         chars=arr[i];
//         if(obj[chars]){
//             obj[chars]++
//         }else{
//             obj[chars]=1
//         }
//     }
//     return obj;
// };
// console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2],1));



