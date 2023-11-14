let myPromise =  new Promise(function (myReslove, myReject) {
    setTimeout(() => myReslove("Loki is alive"), 3000)
}).then(data => console.log(data)).catch(error => console.log("This is rejected" , error))