var h1 = document.getElementById('header')
function countdown() {
    setTimeout(() => {
        h1.innerHTML = '10..',
            setTimeout(() => {
                h1.innerHTML = '9..',
                    setTimeout(() => {
                        h1.innerHTML = '8..',
                            setTimeout(() => {
                                h1.innerHTML = '7..',
                                    setTimeout(() => {
                                        h1.innerHTML = '6..',
                                            setTimeout(() => {
                                                h1.innerHTML = '5..',
                                                    setTimeout(() => {
                                                        h1.innerHTML = '4..',
                                                            setTimeout(() => {
                                                                h1.innerHTML = '3..',
                                                                    setTimeout(() => {
                                                                        h1.innerHTML = '2..',
                                                                            setTimeout(() => {
                                                                                h1.innerHTML = '1..',
                                                                                    setTimeout(() => {
                                                                                        h1.innerHTML = 'HAPPY MORNING'
                                                                                    }, 1000)
                                                                            }, 1000)
                                                                    }, 1000)
                                                            }, 1000)
                                                    }, 1000)
                                            }, 1000)
                                    }, 1000)
                            }, 1000)
                    }, 1000)
            }, 1000)
    }, 1000)
}



countdown();





/*
setInterval(function(){
    if(name==0)
        clearInterval();
    else
    {
    console.log((name--)+"..");
    if(name==0)
        console.log("HAPPY MORNING");
    }
},1000,name=10)




/*function greeting(name) {
    setInterval(function(){
        if(name===0)
        {
            console.log("HAPPY MORNING");
            clearInterval(setInterval);
        }
        else
        console.log(name--+"..");

    },1000);
  }

  function processUserInput(callback) {
    callback(10);
  }

  processUserInput(greeting);
  */