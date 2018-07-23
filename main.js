// 1
const language = /\/(ru|uk)\/novostroyki/;
// 2
const region = /(?:(?:-)(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)(?:-oblast))?/;
//3
const noCity = /(?!rayon|metro|levyy|pravyy|vozle|ulitsa|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|sdannyye|stroyashchiyesya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|rassrochka|s-remontom|-)/;
const city = new RegExp('(?:(?:-)(' + noCity.source + '[a-z]+-?' + noCity.source + '[a-z]+)?)?');
//4
const noArea = /(?!metro|levyy|pravyy|vozle|ulitsa|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|sdannyye|stroyashchiyesya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|rassrochka|s-remontom|-)/;
const area = new RegExp('(?:(?:rayon-)(' + noArea.source + '[a-z]+-?' + noArea.source + '[a-z]+)?)?');
//5
const noMetro = /(?!levyy|pravyy|vozle|ulitsa|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|sdannyye|stroyashchiyesya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|rassrochka|s-remontom|-)/;
const metro = new RegExp('(?:(?:metro-)(' + noMetro.source + '[a-z]+-?' + noMetro.source + '[a-z]+)?)?');
//6
const shore = /(levyy-bereg|pravyy-bereg)?/;
//7
const neatMetro = /(vozle-metro)?/;
//8
const noStreet = /(?!odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye|sdannyye|stroyashchiyesya|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|rassrochka|s-remontom|-)/;
const street = new RegExp('(?:(?:ulitsa-)(' + noStreet.source + '[a-z]+-?' + noStreet.source + '[a-z]+)?)?');
// 9
const exploitation = /(?:(?:-?)(sdannyye))?/;
// 10
const build = /(?:(?:-?)(stroyashchiyesya))?/;
// 11
const objectType = /(?:(?:-?)(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?/;
// 12
const objectClass = /(?:(?:-?)(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?/;
// 13
const roomCount = /(?:(?:-?)(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?/;
// 14
const installmentPlan = /(?:(?:-?)(rassrochka))?/;
// 15
const repair = /(?:(?:-?)(s-remontom))?/;


const finalRegExp = new RegExp(language.source + region.source + city.source + '(?:-)?(?:' + area.source + '|'
    + metro.source + '|' + shore.source + '|' + neatMetro.source + '|' + street.source + ')' + '?' + exploitation.source
    + build.source + objectType.source + objectClass.source + roomCount.source + installmentPlan.source + repair.source);

console.log(finalRegExp.exec('/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii'));


