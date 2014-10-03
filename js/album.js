function AlbumCtrl($scope){
  $scope.images = [
      {image: 'images/1.jpg', thumbnail: 'images/1_thumb.jpg', description: 'Changing is difficult. Not changing is fatal!'},
      {image: 'images/2.jpg', thumbnail: 'images/2_thumb.jpg', description: 'Life is better when you\'re laughing :)'},
      {image: 'images/3.jpg', thumbnail: 'images/3_thumb.jpg', description: 'A vision is not just a picture of what could be; It is an appeal to our better selves, a call to become something more!'},
      {image: 'images/4.jpg', thumbnail: 'images/4_thumb.jpg', description: 'Be sure you put your feet in the right place; Then stand firm!'},
      {image: 'images/1.jpg', thumbnail: 'images/1_thumb.jpg', description: 'Changing is difficult. Not changing is fatal!'},
      {image: 'images/2.jpg', thumbnail: 'images/2_thumb.jpg', description: 'Life is better when you\'re laughing :)'},
      {image: 'images/3.jpg', thumbnail: 'images/3_thumb.jpg', description: 'A vision is not just a picture of what could be; It is an appeal to our better selves, a call to become something more!'},
      {image: 'images/4.jpg', thumbnail: 'images/4_thumb.jpg', description: 'Be sure you put your feet in the right place; Then stand firm!'},      
      {image: 'images/1.jpg', thumbnail: 'images/1_thumb.jpg', description: 'Changing is difficult. Not changing is fatal!'},
      {image: 'images/2.jpg', thumbnail: 'images/2_thumb.jpg', description: 'Life is better when you\'re laughing :)'},
      {image: 'images/3.jpg', thumbnail: 'images/3_thumb.jpg', description: 'A vision is not just a picture of what could be; It is an appeal to our better selves, a call to become something more!'},
      {image: 'images/4.jpg', thumbnail: 'images/4_thumb.jpg', description: 'Be sure you put your feet in the right place; Then stand firm!'}     
  ];
  
  $scope.currentImage = _.first($scope.images);
  
  $scope.setCurrentImage = function(image){
      $scope.currentImage = image;
  }
}