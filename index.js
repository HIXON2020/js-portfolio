'use strict';

// タブセクションーーーーーーーーーーーーーーーーーーーーー
const tableLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tableLabels.forEach(clickedLabel => {
  clickedLabel.addEventListener('click',(e)=>{
    e.preventDefault();//anchorのリロードを制御

    tableLabels.forEach(label => {
      // 最初からactiveなリストからactiveを外す
      label.classList.remove('active');
    });
    　//クリックしたリストにactiveを付ける
      clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      // 最初からactiveなcontentsからactiveを外す
      content.classList.remove('active');
    });
    // クリックしたリストにactiveを付ける
    document.getElementById(clickedLabel.dataset.id).classList.add('active');

  });
});

// Lengthセクションーーーーーーーーーーーーーーーーーーーーーー

function ItocCalc() {
  var inch = document.form1.inch.value;
  var itoc = parseFloat(inch) * 2.54;
  var itom = parseFloat((inch) / 39.37).toFixed(4);
  var itof = parseFloat((inch) / 12).toFixed(4);
  var itoy = parseFloat((inch) / 36).toFixed(4);
  document.form1.cm.value = itoc;
  document.form1.m.value = itom;
  document.form1.ft.value = itof;
  document.form1.yd.value = itoy;
}

function CtoiCalc() {
  var cm2 = document.form2.cm2.value;
  var ctomm = parseFloat(cm2) * 10;
  var ctom = parseFloat(cm2) / 100;
  var ctoi = parseFloat((cm2) / 2.54).toFixed(4);
  var ctof = parseFloat((cm2) / 30.48).toFixed(4);
  document.form2.mm.value = ctomm;
  document.form2.m.value = ctom;
  document.form2.inch.value = ctoi;
  document.form2.ft.value = ctof;
}
// WIGHTセクション-----------------------------
function calcWeight(){
  let weight = document.getElementById('weight').value;
  let unit = document.getElementById('inputGroupSelect01').value;
  const g = document.getElementById('gram');
  const kg = document.getElementById('kilo');
  const lb = document.getElementById('pound');
  const oz = document.getElementById('ounce');

  if(unit === 'g'){
    let gtokg = weight/1000;
    let gtolb = parseFloat(weight/453.592).toFixed(5);
    let gtooz = parseFloat(weight/28.3495).toFixed(5);
    g.value = weight;
    kg.value = gtokg;
    lb.value = gtolb;
    oz.value = gtooz;
  }
  if(unit === 'kg'){
    let kgtog = weight*1000;
    let kgtolb = weight*2.2046;
    let kgtooz = weight*35.274;
    g.value = kgtog;
    kg.value = weight;
    lb.value = kgtolb;
    oz.value = kgtooz;
  }
  if(unit === 'lb'){
    let lbtog = weight*453.592;
    let lbtokg = parseFloat(weight/2.2046).toFixed(5);
    let lbtooz = weight*16;
    g.value = lbtog;
    kg.value = lbtokg;
    lb.value = weight;
    oz.value = lbtooz;
  }
  if(unit === 'oz'){
    let oztog = parseFloat(weight*28.3495).toFixed(5);
    let oztokg = parseFloat(weight/35.274).toFixed(5);
    let oztolb = parseFloat(weight/16).toFixed(5);
    g.value = oztog;
    kg.value = oztokg;
    lb.value = oztolb;
    oz.value = weight;
  }
}
//CALENDERセクション--------------------------
function toWareki(){
  const sei = document.getElementById('seireki').value.split('-');
  const wa = new Date(sei[0],sei[1]-1,sei[2]);

  document.getElementById('wareki').value = wa.toLocaleDateString('ja-JP-u-ca-japanese',{era:"long"});
}
function today(){
  const dt =  new Date();
  const y = dt.getFullYear();
  const m = ('0' + (dt.getMonth()+1)).slice(-2);
  const d = ('0' + dt.getDate()).slice(-2);
  return y + '-' + m + '-' + d;
}
document.getElementById('seireki').value = today();

//  大阪万博までのカウントダウン
const now = new Date();
const expo = new Date('2025/05/03');

const countdown = Math.ceil((expo.getTime() - now.getTime()) / (1000*60*60*24)); //24h=1day
if(countdown > 0 ){
  document.getElementById('expo').textContent = countdown;
}
if(countdown === 0){
  document.getElementById('expo').textContent = 'Enjoy the Osaka World Expo \'25!!';
}

// セルフセットタイマー＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
function set2fig(num) {
  // 数値が1桁だったら2桁の文字列にして返す
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}
function isNumOrZero(num) {
  // 数値でなかったら0にして返す
  if( isNaN(num) ) { return 0; }
  return num;
}
function myCountdown(){
  const nowDate = new Date();//2020/08/24
  const dnumNow = nowDate.getTime();//msに変換
  // ユーザーデータ
  let inputYear  = document.getElementById("userYear").value;
  let inputMonth = document.getElementById("userMonth").value - 1;
  let inputDate  = document.getElementById("userDate").value;

  let targetDate = new Date(inputYear, inputMonth, inputDate);
  let dnumTrget = targetDate.getTime();
  // ▼差を計算
  let diff2Dates = dnumTrget - dnumNow;
  if(dnumTrget < dnumNow){
    diff2Dates *= -1; // 期限が過ぎた場合は -1 を掛けて正の値に変換
  }
  // ▼ミリ秒を分解
  const dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );  // 日数
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
  const dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
  const dMin   = diff2Dates / ( 1000 * 60 );    // 分
  diff2Dates = diff2Dates % ( 1000 * 60 );
  const dSec   = diff2Dates / 1000; // 秒
  // ▼期限日時を表示
  const dlYear  = targetDate.getFullYear();
  const dlMonth = targetDate.getMonth() + 1;
  const dlDate  = targetDate.getDate();
  const msg1 = '(' + dlYear + "/" + dlMonth + "/" + dlDate + ')';
  // ▼残り日数・時間を表示
  const msg2 = Math.floor(dDays) + "日"
           + Math.floor(dHour) + "時間"
           + Math.floor(dMin) + "分"
           + Math.floor(dSec) + "秒";
  // ▼カウントダウンかカウントアップの文字列を作成
  const mySetTimer = document.getElementById('my-set-timer');
  const myTimerResult = document.getElementById('my-timer-result');
  
  if(dnumTrget > dnumNow){
    mySetTimer.textContent = msg1;
    myTimerResult.textContent = msg2;
  }else{
    myTimerResult.textContent = '目標時間を過ぎました。';
  }
}
setInterval('myCountdown()',1000);

// KEY CODEセクション--------------------------
const two = document.getElementById('two');
const ten = document.getElementById('ten');
const sixteen = document.getElementById('sixteen');
const mojicode = document.getElementById('moji-code');

function binToInt1() {
  let input2 = parseInt(document.form3.input2.value,2);
  ten.value = input2;
  let ans2 = input2.toString(16);
  sixteen.value = ans2
}
function binToInt2(){
  let input10 = parseInt(document.form3.input10.value,10);
  let ans3 = input10.toString(2);
  two.value = ans3;
  let ans4 = input10.toString(16);
  sixteen.value = ans4;
}
function binToInt3(){
  let input16 = parseInt(document.form3.input16.value,16);
  let ans5 = input16.toString(2);
  two.value = ans5;
  ten.value = input16;
}
function binToUni(){
  let inputmoji = document.form3.moji.value;
  let moji10 = inputmoji.codePointAt().toString(10);
  let moji16 = inputmoji.codePointAt().toString(16);

  let code10 = `&#${moji10};`;
  let code16 = `\\0${moji16}`;

  let mojicode1 = document.getElementById('moji_code10');
  let mojicode2 = document.getElementById('moji_code16');
  
  mojicode1.value = code10;
  mojicode2.value = code16;
}

// BMIセクションーーーーーーーーーーーーーーーーーーーー
const height = document.getElementById('height-input');
const weight = document.getElementById('weight-input');
const bmi_btn = document.getElementById('bmi_btn');
const bmi_output = document.getElementById('bmi_result');

const calBmi = function(){
  var h_value = height.value/100;
  var w_value = weight.value;
  // h_value /= 100;
  
  var bmi = Math.floor((w_value / (h_value * h_value))*10) / 10;
  
  bmi_output.textContent = bmi;
}
// console.log(h_value);
bmi_btn.addEventListener('click',calBmi);

// グラフデータセクション--------------------------------
//「キャッシュレスデータ」
var data = [
  { label: "韓国", y: 89.1 },	
  { label: "中国", y: 60.0 },	
  { label: "カナダ", y: 55.4 },
  { label: "イギリス", y: 54.9 },	
  { label: "オーストリア", y: 51.0 },
  { label: "スウェーデン", y: 48.6 },
  { label: "アメリカ", y: 45 },
  { label: "フランス", y: 39.1 },
  { label: "インド", y: 7.1 },
  { label: "日本", y: 7.1 },
  { label: "ドイツ", y: 7.1 }
];

var stage = document.getElementById('chartContainer1');
var chart = new CanvasJS.Chart(stage, {
  title: {
    text: "各国キャッシュレス決済比率"  //グラフタイトル
  },
  axisY: {
    title: "Growth Rate (in %)",
    suffix: "%"
  },
  theme: "theme4",  //テーマ設定
  data: [{
    type: 'column',  //グラフの種類
    dataPoints: data  //表示するデータ
  }]
});
chart.render();


window.onload = function () {

  //Better to construct options first and then pass it as a parameter
  var options = {
    animationEnabled: true,
    title: {
      text: "プログラミング言語人気ランキング2020",                
      fontColor: "Peru"
    },	
    axisY: {
      tickThickness: 0,
      lineThickness: 0,
      valueFormatString: " ",
      includeZero: true,
      gridThickness: 0                    
    },
    axisX: {
      tickThickness: 0,
      lineThickness: 0,
      labelFontSize: 18,
      labelFontColor: "Peru"				
    },
    data: [{
      indexLabelFontSize: 26,
      toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
      indexLabelPlacement: "inside",
      indexLabelFontColor: "white",
      indexLabelFontWeight: 600,
      indexLabelFontFamily: "Verdana",
      color: "#62C9C3",
      type: "bar",
      dataPoints: [
        { y: 42, label: "42人", indexLabel: "VB.NET" },
        { y: 42, label: "42", indexLabel: "PHP" },
        { y: 58, label: "58", indexLabel: "HTML/CSS" },
        { y: 91, label: "91", indexLabel: "VBA" },
        { y: 94, label: "94", indexLabel: "Java" },
        { y: 96, label: "96", indexLabel: "C#" },
        { y: 106, label: "106", indexLabel: "SQL" },
        { y: 110, label: "110", indexLabel: "Javascript" },
        { y: 127, label: "127", indexLabel: "Python" },
        { y: 136, label: "136", indexLabel: "C/C++" }
      ]
    }]
  };
  
  $("#chartContainer2").CanvasJSChart(options);

  // 言語円グラフ
  var chart = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    title: {
      text: "IRL世界の言語"
    },
    data: [{
      type: "pie",
      startAngle: 240,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {y: 41, label: "中国"},
        {y: 11, label: "スペイン語"},
        {y: 11, label: "英語"},
        {y: 7, label: "アラビア語"},
        {y: 6, label: "ヒンディー語"},
        {y: 6, label: "ベンガル語"},
        {y: 6, label: "ポルトガル語"},
        {y: 5, label: "ロシア語"},
        {y: 7, label: "その他"}
      ]
    }]
  });
  chart.render();

  // ドーナツグラフ
  var chart = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    title:{
      text: "Online世界の言語",
      horizontalAlign: "center"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 52.9, label: "英語" },
        { y: 6.3, label: "ドイツ語" },
        { y: 6.1, label: "ロシア語" },
        { y: 5.1, label: "スペイン語"},
        { y: 4.1, label: "フランス語"},
        { y: 3.8, label: "日本語"},
        { y: 2.8, label: "ポルトガル語"},
        { y: 2.5, label: "イタリア語"},
        { y: 1.9, label: "ペルシャ語"},
        { y: 1.8, label: "中国語"},
        { y: 12.7, label: "その他"},
      ]
    }]
  });
  chart.render();
}

  


// カルーセルセクションーーーーーーーーーーーーーーーーーーー
// window.addEventListener('load',()=>{}); //同じ挙動
// 即時関数 
// (function immediate(){
//   console.log('即時関数です');
// })();

document.addEventListener('DOMContentLoaded',()=>{
  setInterval(() => {
    let target = currentIndex + 1;
    if(target === images.length){
      target = 0;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
  },1000*10);
});

const images = [
  'img/world-fest.jpg',
  'img/world-fest1.jpg',
  'img/world-fest2.jpg',
  'img/world-fest4.jpg',
  'img/world-fest6.jpg',
  'img/world-fest7.jpg',
  'img/world-fet5.jpg'
];

let currentIndex = 0;
const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];

for(let [index,image] of images.entries()){
  // console.log(index,image);
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if(index === currentIndex){
    li.classList.add('current');
  }

  li.addEventListener('click',()=>{
    mainImage.src = image;
    mainImage.classList.add('active');
 
    setTimeout(()=>{
      mainImage.classList.remove('active');
    },8000);

    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });

  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);
}

const next = document.getElementById('carousel__next');
next.addEventListener('click',()=>{
  let target = currentIndex + 1;
  if(target === images.length){
    target = 0;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click',()=>{
  let target = currentIndex - 1;
  if(target < 0){
    target = images.length - 1;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});


//APIセクションーーーーーーーーーーーーーーーーーーーーーーー
const url = 'https://dog.ceo/api/breeds/image/random';
const options = {
  method: 'GET'
};

// const fetchTest = fetch(url, options)
// .then( response => response.json());
// console.log(fetchTest.message);
// この結果はundefined。上記の処理が終わるまでこの処理を待たせる必要がある(async,await)

function getDogImage(){
  return fetch(url,options)
  .then(response => {
    // console.log(response.ok);
    // console.log(response.status);
    if(response.ok){
      return response.json();
    }
    throw new Error('エラーです');
  }).catch(e => console.log(e.message));
}

async function getImage(url,options){
  const response = await getDogImage(url,options);
  console.log(response.message);

  const api = document.getElementById('api');
  const imageElement = document.createElement('img');
  imageElement.src = response.message;
  api.appendChild(imageElement);
}

getImage(url,options);

// Class継承練習
// class BaseProduct{
//   echoProduct(){
//     console.log('親クラスです');
//   }
//   getProduct(){
//     console.log('親の関数です');
//   }
// }


// class Product extends BaseProduct{
//   constructor(productName){
//     super();
//     this.product = [productName];
//   }

//   getProduct(){
//     console.log(this.product);
//   }
//   addProduct(item){
//     this.product += item;
//     this.product.push(item);
//   }
//   static testProduct(){
//     console.log('静的メソッド');
//   }
// }
// Product.testProduct
// const product = new Product('komeda');
// console.log(product.product);




