module.exports = function toReadable (number) {
    const num_str = {
        s0: ['zero'],
        s1: ['','one','two','three','four','five','six','seven','eight','nine'],
        s10: ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        s20: ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        s100: ['hundred'],
        s1000: ['thousand'],
    }
    let readnum='';
    if ((typeof(number) == "undefined") || (number==0)) readnum=num_str.s0[0];
    if ((number>0) && (number<10)) readnum=num_str.s1[number];
    if ((number>9) && (number<20)) readnum=num_str.s10[number-10];
    if ((number>19) && (number<100)) readnum=num_str.s20[Math.floor(number/10)]+' '+num_str.s1[number%10];
    if ((number>99) && (number<1000) && (number%100<10)) readnum=num_str.s1[Math.floor(number/100)]+' '+num_str.s100[0]+' '+num_str.s1[number%10];
    if ((number>99) && (number<1000) && (number%100>9) && (number%100<20)) readnum=num_str.s1[Math.floor(number/100)]+' '+num_str.s100[0]+' '+num_str.s10[number%100-10];
    if ((number>99) && (number<1000) && (number%100>19)) readnum=num_str.s1[Math.floor(number/100)]+' '+num_str.s100[0]+' '+num_str.s20[Math.floor(number/10)%10]+' '+num_str.s1[number%10];
    //console.log(readnum);
    return readnum.trim();
}
