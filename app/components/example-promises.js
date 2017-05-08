function  getTemp(location) {
    return new Promise(function (resolve,reject) {
        //Note this is where the implementation is
        setTimeout(function () {
            resolve(79);
            reject('city not found');
        },2000);
    });
};

getTemp('Phili').then(function (temp) {
   console.log('promise sucess',temp);
},function (err) {
   console.log('promise error');
});
