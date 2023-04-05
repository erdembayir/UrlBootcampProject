/* const url = require('url');
const websiteUrl1 = "http://www.atez.com.tr/?timezone=en&lang=en"; //(search: '?timezone=en&lang=en', query: 'timezone=en&lang=en', path: '/?timezone=en&lang=en') 
const websiteUrl = "http://www.atez.com.tr8080/about";
const websiteUrlEN = "http://www.atez.com.tr8080/en/about";

const urlParams1 = url.parse(websiteUrl1);
const urlParams = url.parse(websiteUrl);
const urlParamsEN = url.parse(websiteUrlEN);
console.log()
console.log(urlParams);
console.log('EN', urlParamsEN); */


//ödev dile bağlı olarak en, de, ru, ae dilleri urlden okuyup hangi dilde çalıştığını gösteren bir uygulama yazınız.
//örnek: http://www.atez.com.tr8080/ru/trabzon
//çıktı: trabzon sayfası ru dilinde çalışıyor.
//örnek: http://www.atez.com.tr8080/ru/depo-antrupo
//çıktı: depo-antrupo sayfası ru dilinde çalışıyor.
//örnek: http://www.atez.com.tr8080/en/bekleyen-ilanlar
//çıktı: bekleyen-ilanlar sayfası en dilinde çalışıyor.


const url = require('url');
const websiteUrlRu = "http://www.atez.com.tr8080/ru/trabzon"
const websiteUrlRuDepoAntrupo = "http://www.atez.com.tr8080/ru/depo-antrupo"
const websiteUrlEn = "http://www.atez.com.tr8080/en/bekleyen-ilanlar"

//Trabzon sayfası ru dilinde çalışıyor.
const UrlParamsRu = url.parse(websiteUrlRu);
let Url;
if(UrlParamsRu.path === '/ru/trabzon') {
    Url = 'trabzon sayfası ru dilinde çalışıyor.';} 
else {
    Url = 'trabzon sayfası ru dilinde çalışmıyor.';
}
console.log(Url);

//Depo-antrupo sayfası ru dilinde çalışıyor.
const UrlParamsRuDepoAntrupo = url.parse(websiteUrlRuDepoAntrupo);
let UrlRuDepoAntrupo;
if(UrlParamsRuDepoAntrupo.path === '/ru/depo-antrupo') {
    Url = 'depo-antrupo sayfası ru dilinde çalışıyor.';}
else{
    Url = 'depo-antrupo sayfası ru dilinde çalışmıyor.';
}   
console.log(Url);

// Bekleyen-ilanlar sayfası en dilinde çalışıyor.
const UrlParamsEn = url.parse(websiteUrlEn);
let UrlEn;
if(UrlParamsEn.path === '/en/bekleyen-ilanlar') {
    Url = 'bekleyen-ilanlar sayfası en dilinde çalışıyor.';}
else{
    Url = 'bekleyen-ilanlar sayfası en dilinde çalışmıyor.';
}
console.log(Url);






