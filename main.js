// 1
const language = /\/(ru|uk)\/novostroyki/;
// 2
const region = /(?:(?:-)(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)(?:-oblast))?/;
//3
const city = /(?:(?:-)(kiev|kharkiv|odessa|dnipro|donetsk|zaporizhia|lviv|kryvyi-rih|mykolaiv|mariupol|luhansk|vinnytsia|makiivka|sevastopol|simferopol|kherson|poltava|chernihiv|cherkasy|zhytomyr|sumy|khmelnytskyi|chernivtsi|horlivka|rivne|kamianske|kropyvnytskyi|ivano-frankivsk|kremenchuk|ternopil|lutsk|bila-tserkva|kramatorsk|melitopol|kerch|nikopol|sloviansk|uzhhorod|berdiansk|alchevsk|pavlohrad|sieverodonetsk|yevpatoria|lysychansk|kamianets-podilskyi|brovary|konotop|uman|mukachevo|oleksandriia|khrustalnyi|yenakiieve|shostka|berdychiv|yalta|bakhmut|kadiyivka|drohobych|kostiantynivka|nizhyn|izmail|novomoskovsk|feodosiya|kovel|smila|chervonohrad|kalush|pervomaisk|korosten|dovzhansk|pokrovsk|kolomyia|boryspil|rubizhne|chornomorsk|stryi|druzhkivka|khartsyzk|pryluky|lozova|chystiakove|novohrad-volynskyi|enerhodar|antratsyt|novovolynsk|horishni-plavni|izium|shakhtarsk|bilhorod-dnistrovskyi|myrnohrad|okhtyrka|marhanets|fastiv|snizhne|nova-kakhovka|lubny|rovenky|zhovti-vody|brianka|svitlovodsk|irpin|sorokyne|shepetivka|romny|varash|pokrov|myrhorod|podilsk))?/;
//4
const area = /(?:(?:rayon-)([a-z]+))?/;
//5
const metro = /(?:(?:metro-)([a-z]+))?/;
//6
const shore = /(levyy-bereg|pravyy-bereg)?/;
//7
const neatMetro = /(vozle-metro)?/;
//8
const street = /(?:(?:ulitsa-)([a-z]+))?/;
// 9
const roomCount = /(?:(?:-)(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?/;
// 10
const exploitation = /(?:(?:-)(sdannyye))?/;
// 11
const build = /(?:(?:-)(stroyashchiyesya))?/;
// 12
const objectClass = /(?:(?:-)(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?/;
// 13
const objectType = /(?:(?:-)(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?/;
// 14
const installmentPlan = /(?:(?:-)(rassrochka))?/;
// 15
const repair = /(?:(?:-)(s-remontom))?/;


const finalRegExp = new RegExp(language.source + region.source + city.source + '(?:-)?(?:' + area.source + '|'
    + metro.source + '|' + shore.source + '|' + neatMetro.source + '|' + street.source + ')' + '?' + roomCount.source
    + exploitation.source + build.source + objectClass.source + objectType.source + installmentPlan.source + repair.source);

console.log(finalRegExp.exec('/uk/novostroyki-kiev-rayon-goloseevskii-kvartiry'));
