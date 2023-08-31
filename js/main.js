

let toggler = document.getElementById('toggler');
let controls = document.getElementById('controls');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');

if(toggler != null){
  toggler.addEventListener('click' , ()=>{
    controls.classList.toggle('active');
    open.classList.toggle('d-none');
    close.classList.toggle('d-none');
  })
}








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



const showContent = document.getElementById('show-content');

if(showContent != null){
  showContent.addEventListener('click' , ()=>{
    let hideContent = document.querySelector('.content');
    let down_up = document.getElementById('down-up');
    console.log('clicked');
    hideContent.classList.toggle('d-none');
    down_up.classList.toggle('fa-caret-down');
    down_up.classList.toggle('fa-caret-up');
  })
}


















