$(document).ready(function(){

  var imageBox = $('.slider ul'),
      imageWidth = $('.slider ul li').first().children('img').width(),
      imageQuantity = $('.slider ul').children('li').length,
      currentImage = 1;

  imageBox.css('width', imageWidth*imageQuantity);

  $('.nav button').on('click',function(){
    var whichButton = $(this).data('nav');

    if(whichButton === 'next'){

      if(currentImage === imageQuantity){
        currentImage = 1;
        transition(currentImage,imageWidth);
      }else{
        currentImage++;
        transition(currentImage,imageWidth);
      }
    
    }else if(whichButton === 'prev'){

      if(currentImage === 1){
        currentImage = imageQuantity;
        transition(currentImage,imageWidth);
      }else{
        currentImage--;
        transition(currentImage,imageWidth);
      }
    }
  });

  function transition(currentImageInput, imageWidthInput) {
    var pxValue = -(currentImageInput-1) * imageWidthInput
      imageBox.animate({
        'left': pxValue
      })
  }
});