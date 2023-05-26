function asyncOperation1(callback) {
    setTimeout(function() {
      console.log("Async operation 1 completed");
      callback("Result 1");
    }, 2000);
  }
  
  function asyncOperation2(data, callback) {
    setTimeout(function() {
      console.log("Async operation 2 completed");
      callback(data + " -> Result 2");
    }, 2000);
  }
  
  function asyncOperation3(data, callback) {
    setTimeout(function() {
      console.log("Async operation 3 completed");
      callback(data + " -> Result 3");
    }, 2000);
  }
  
  asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
      asyncOperation3(result2, function(result3) {
        console.log("Final result: " + result3);
      });
    });
  });
  