// Menu data structure (Task 3.0)
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  
  // Task 1.0
  var mainEl = document.querySelector('main');
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
  var topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
  topMenuEl.style.height = '100%'
  
  // Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Task 2.3
  topMenuEl.classList.add('flex-around');
  
  // Task 3.0
  // menuLinks data structure copied at the top
  
  // Task 3.1
  menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
  
  //Task 4
  const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%'; //task 4.1
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; //task 4.2
subMenuEl.classList.add('flex-around'); //task 4.3
subMenuEl.style.position = 'absolute'; // 4.4
subMenuEl.style.top = 0; // 4.5

// task 5
let topMenuLinks = topMenuEl.querySelectorAll('a'); //5.1
var showingSubMenu = false; 
topMenuEl.addEventListener('click', handleClick); 
function handleClick(event){ 
  event.preventDefault();
  
  if(event.target.tagName !== 'A'){return;} 
  if(event.target.classList.contains('active')){
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return; // 5.3
  }
  
  topMenuLinks.forEach(element => {
    element.classList.remove('active');
  }); // 5.4

  if(event.target){
    event.target.classList.add('active'); // 5.5

    topMenuLinks.forEach(element => {

      if(element.subLinks){showingSubMenu=true;}
      else{showingSubMenu=false;} //
      
    });
    if(showingSubMenu===true){
      buildSubMenu(topMenuEl.subLinks);
      subMenuEl.style.top = "100%";
    }else{
      subMenuEl.style.top = 0;
    }
  }

  function buildSubMenu(links) {
    subMenuEl.innerHTML = "";
    links.forEach(element => {
      const newA = links.createElement('a');
      newA.setAttribute('href', element.href);
      newA.textContent = element.text;
      subMenuEl.appendChild(newA);
    });
  }

}
//Dom lab 
