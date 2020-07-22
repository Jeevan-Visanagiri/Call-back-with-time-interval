


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