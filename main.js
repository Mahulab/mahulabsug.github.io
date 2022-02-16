


  // open & close nav menu
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const menu = document.querySelector("nav .container ul");

// open sidebar
menuBtn.addEventListener('click',() => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})
// close sidebar
closeBtn.addEventListener('click',() => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})

//Change active class to clicked nav item
const navItems = document.querySelectorAll('nav ul li');

//Add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () =>{
    removeActiveClass();
    link.classList.add('active');
  })
})

//Remove active class from other items
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

//show/hide Projects
const Projects = document.querySelectorAll('section#Projects article');

Projects.forEach(Project => {
  Project.addEventListener('click', () => {
    Project.classList.toggle('open');

    //Change icon
    const icon = Project.querySelector('.icon i');
    if(icon.className === 'uil uil-plus'){
      icon.className = 'uil uil-minus';
    } else{
      icon.className = 'uil uil-plus';
    }

  })

})
// change navbar style on scroll
window.addEventListener("scroll", () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})











 

  
