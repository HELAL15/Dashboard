

let profile_photo = document.getElementById('profile-photo');
let photo = document.getElementById('photo');
let file = document.getElementById('file');

if( file !=null){
  file.onchange = ()=>{
    let choosedFile = file.files[0];
    if(choosedFile){
      let reader = new FileReader();
      reader.onload = ()=>{
        photo.setAttribute('src' , reader.result);
      }
      reader.readAsDataURL(choosedFile);
    }
  }
}