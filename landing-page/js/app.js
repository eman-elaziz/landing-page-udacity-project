/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

 // Define Global Variables
 let uList=document.getElementById("navbar__list");

 let sections=document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// this function return true if section in viewport
const inViewport =(ele)=>{
  const rect = ele.getBoundingClientRect();
  return( 
      rect.top>=0 &&
      rect.left>=0 &&
      rect.bottom<=(window.innerHeight ||document.documentElement.clientHeight)&&
      rect.right<=(window.innerWidth||document.documentElement.clientWidth)
  );
  }



/**
 * End Helper Functions
 * 
 * 
 * Begin Main Functions
 * 
*/

// build the nav

// build the nav
const buildNav=()=>{
  let item="";
  sections.forEach(elm=>{
   item+=`<li class="nav-item active" data-link=${elm.id}><a class="menu__link nav-link" href="#${elm.id}">${elm.dataset.nav}</a><li>`
  
  })
  uList.innerHTML=item;}
  




// Add class 'active' to section when near top of viewport

const addActive=()=>{
  
window.addEventListener('scroll',()=>{
sections.forEach((section)=>{
  if(inViewport(section)){
      section.classList.add('your-active-class')
      
      
  }
  else{
      section.classList.remove('your-active-class')

  }
})
})
}



 
// Scroll to anchor ID using scrollTO event
const scrollToSection =()=>{
  let links=document.querySelectorAll("li a");
  links.forEach(link=>{
    link.addEventListener("click",()=>{
      let href=link.getAttribute('href'); 
      for (let i= 0; i < sections.length; i++) {
        if(`#${sections[i].getAttribute("id")}`==href){
          sections[i].scrollIntoView({behavior:'smooth',block:'start'});
         
            }}
         })
    
    
    

  })
  }

buildNav();
 
scrollToSection();  

addActive();






