#!/usr/bin/node

// 模板字符串 反引号`和${}
{
  console.log("-------模板字符串---------");
  let a = "first";
  let b = "second";
  let c = `a is ${a}, b is ${b}`;
  console.log(c);

}

// 默认值
{
  console.log("-------默认值---------");
  function add(a, b = 10) {
    return a + b;
  }
  console.log(add(1)); // 11
  console.log(add(1, 1)); // 2
}

// 剩余参数
{
  console.log("-------剩余参数---------");
  function pick(obj, ...params) {
    console.log(obj);
    console.log(params);
  }
  pick("a", "b");
  pick("a", "b", "c", "d");
}

// 扩展运算符 =》剩余参数的反向应用
// 将一个数组分割，并将各项作为分离的参数传给函数
{
  console.log("-------扩展运算符---------");
  let a = [1, 2, 3, 4, 5, 6];
  function expand(a, b, c) {
    console.log(a, b, c);
  }
  expand(...a); //1 2 3
}

// 箭头函数
// 使用=>来定义， function(){} 等于 ()=>{}
{
  console.log("-------箭头函数---------");
  // 演变过程
  // 函数表达式中，函数可以省略名字，即匿名函数，如下
  let funa = function () {
    console.log("匿名函数");
  }
  funa();

  // 使用箭头函数表达式，把表示函数的关键字function也省略了,如下
  let funb = () => {
    console.log("箭头函数");
  }
  funb();

  // 当有且只有一个参数时，()也可以省略，如下
  let func = arg1 => {
    console.log("箭头函数一个参数");
  }
  func();

  // 如果函数体是返回一个表达式，{}和return还可以省略，如下，fund可以简写成fune的形式
  let fund = arg1 => {
    return "箭头函数体只有一个返回表达式" + arg1
  }
  console.log(fund("示例"));

  // fund可以简写成fune的形式
  let fune = arg1 => "箭头函数体只有一个返回表达式-简写" + arg1;
  console.log(fune("示例"));

  // 闭包函数
}