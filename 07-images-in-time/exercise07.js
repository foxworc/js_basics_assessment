(function () {


  /**
   * Use the built in function setTimeout to add a random image to the page every 2.5 seconds.
   * The function setInterval would be easier but figuring out how to do this with setTimeout is
   * more rewarding. Good luck and remember to google all the things.
   * 
   * Use the addImage function to add the image. There are several images in this directory
   * for you to use
   *
   * To point you in the right direction: check out
   * the getRandomInt function on this page:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * 
   * This link may help as well:
   * 
   * https://stackoverflow.com/questions/729921/settimeout-or-setinterval
   * 
   */



  //  let containerBoxImage = document.querySelector("#image-box");


  //  * this function adds an image to the page
  //  * @param {String} name an image filename
  //  */


  function addImage(name) {
    var img = document.createElement('img');
    img.src = name;
    document.getElementById('image-box').appendChild(img);
  }

  // getRandomInt function????

  
  myImgArray = ['cats.jpg', 'hugger.jpg', 'internet.jpg', 'jackson.jpg', "washington.jpg"]
  

  function getRandomInt(max) {
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
  }

  console.log(myImgArray[0])

  // setTimeout(function(){
  //   addImage(myImgArray[getRandomInt(5)])
  // }, 2.5*1000)



  function yourFunction(){
    // do whatever you like here
    document.getElementById('image-box').innerHTML=""
    addImage(myImgArray[getRandomInt(5)])
    setTimeout(yourFunction, 2500);
}

yourFunction();

  // from previous file in this assignment
//   setTimeout(function(){
//     document.querySelector("#title").innerHTML = "Goodbye World"
//     }, 3*1000)


  // setTimeout(function(){myArray.}, 2.5*1000); // prints "one" after 2.5 seconds

  //your code here

})();