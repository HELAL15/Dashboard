

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



let servicess = document.querySelectorAll('.service-cont');
let delete_services = document.querySelectorAll('.delete-service');

function rem() {
  // Get the index of the clicked delete button within the delete_services collection
  let index = Array.from(delete_services).indexOf(this);
  
  // Remove the corresponding service element based on the index
  if (index !== -1 && index < servicess.length) {
    servicess[index].remove();
  }
}

delete_services.forEach(delete_service => {
  delete_service.addEventListener('click', rem);
});







// let addService = document.getElementById('add-service');
// let services = document.getElementById('services');
// let addPhotoInput = document.getElementById('addPhoto');

// function add_service() {
//   let addName = document.getElementById('addName').value;
//   let addNumber = document.getElementById('addNumber').value;
//   let addDateS = document.getElementById('addDateS').value;
//   let addDateE = document.getElementById('addDateE').value;

//   let addPhoto = addPhotoInput.value; 

//   let service = document.createElement('div');
//   service.classList.add('col-md-12');
//   service.classList.add('service-cont');
//   service.innerHTML = `
//     <div class="service py-4 px-3">
//       <div class="row ">
//         <div class="col-md-8 d-flex flex-wrap align-items-center gap-4">
//           <div class="img">
//             <img src="images/user.png"  alt="" class='photo'>
//           </div>
//           <h3>${addName}</h3>
//           <div class="details d-flex gap-4 align-items-center">
//             <h5><span>${addNumber}</span>متبقي</h5>
//             <h5>${addDateS}</h5>
//             <h5>${addDateE}</h5>
//           </div>
//         </div>
//         <div class="col-md-4">
//           <div class="row btns">
//             <div class="col">
//               <button class="btn stop">إيقاف الخدمة</button>
//             </div>
//             <div class="col">
//               <button class="btn delt delete-service">حذف الخدمة</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   let deleteServiceButton = service.querySelector('.delete-service');
//   deleteServiceButton.addEventListener('click', () => {
//     service.remove(); 
//   });

//   services.appendChild(service);


//   // Clear the input fields
//   addName = '';
//   addNumber = '';
//   addPhoto = '';
//   addDateS = '';
//   addDateE = '';

// }


// addService.addEventListener('click', add_service);




const addService = document.getElementById('add-service');
const services = document.getElementById('services');
const addPhotoInput = document.getElementById('addPhoto');

function createServiceElement(name, number, dateS, dateE, photoSrc) {
  const service = document.createElement('div');
  service.classList.add('col-md-12');
  service.classList.add('service-cont');
  service.innerHTML = `
    <div class="service py-4 px-3">
      <div class="row ">
        <div class="col-md-8 d-flex  align-items-center flex-wrap  ">
          <div class="img">
            <img src="${photoSrc}" alt="" class='photo'>
          </div>
          <h3>${name}</h3>
          <div class="details d-flex  align-items-center justify-content-between gap-3 me-3">
            <h5><span>${number}</span>متبقي</h5>
            <h5>${dateS}</h5>
            <h5>${dateE}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row btns">
            <div class="col">
              <button class="btn stop">إيقاف الخدمة</button>
            </div>
            <div class="col">
              <button class="btn delt delete-service">حذف الخدمة</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const deleteServiceButton = service.querySelector('.delete-service');
  deleteServiceButton.addEventListener('click', () => {
    service.remove();
  });

  return service;
}

function add_service() {
  const addName = document.getElementById('addName').value;
  const addNumber = document.getElementById('addNumber').value;
  const addDateS = document.getElementById('addDateS').value;
  const addDateE = document.getElementById('addDateE').value;
  const addPhoto = addPhotoInput.value;

  if (!addName || !addNumber || !addDateS || !addDateE || !addPhoto) {
    alert('Please fill in all fields before adding a service.');
    return;
  }

  const serviceElement = createServiceElement(addName, addNumber, addDateS, addDateE, addPhoto);
  services.appendChild(serviceElement);

  // Clear the input fields
  document.getElementById('addName').value = '';
  document.getElementById('addNumber').value = '';
  addPhotoInput.value = '';
  document.getElementById('addDateS').value = '';
  document.getElementById('addDateE').value = '';
}

addService.addEventListener('click', add_service);



























//if( addPhotoInput !=null){
  //   let photo = document.querySelector('.photo').value
  //   addPhotoInput.onchange = ()=>{
  //     let choosedFile = addPhoto.files[0];
  //     if(choosedFile){
  //       let reader = new FileReader();
  //       reader.onload = ()=>{
  //         photo.setAttribute('src' , reader.result);
  //       }
  //       reader.readAsDataURL(choosedFile);
  //     }
  //   }
  // }


