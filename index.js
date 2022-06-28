//変数
let str = 'hello world!';

// str = "hello world2!!";

//定数
const c_str = "Konnitiha!";

//配列
let array = ["いち","にい","さん","よん","ごー"]

//ループ文
let index = 0;
// while(index < array.length){
//     console.log(array[index])
//     index++;
// }

//関数
const test = (arg) =>{
    if(array.length > arg){
        console.log("2 more")
    } else{
        console.log("1")
    }
}
test(6);

//オブジェクト
const sai = {
    color: "iii",
    size: "large",
    pur: "mint",
};
console.log(window.innerHeight)
console.log(window.innerWidth)


document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    window.alert("Hi!");
});
console.log(sai)
console.log(c_str)


