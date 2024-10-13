  const navs = document.querySelectorAll(".nav-list li");
  const cube = document.querySelector(".box");
  const sections = document.querySelectorAll('.section') 
  
  const resumeList = document.querySelectorAll('.resumen-list');
  const resumeBoxs = document.querySelectorAll('.resume-box');



  const portfolioLists = document.querySelectorAll('.portfolio-list');
  const portfolioBoxs = document.querySelectorAll('.portfolio-box');

  navs.forEach((nav,id)=>{
    nav.addEventListener('click', ()=>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

            cube.style.transform = `rotateY(${id * -90}deg)`;

            document.querySelector('.section.active').classList.remove('active');
        sections[id].classList.add('active'); 

        const array = Array.from(sections);
          const arrSecs = array.slice(1, -1);
          arrSecs.forEach(arrSecs =>{
            if(arrSecs.classList.contains('active')){
              sections[4].classList.add('action-contact');
            }
          })
          if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
          }
    });
  });



  resumeList.forEach((list,id)=>{
    list.addEventListener('click', ()=>{
        document.querySelector('.resumen-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[id].classList.add('active'); 


    });
  });



  portfolioLists.forEach((list,id)=>{
    list.addEventListener('click', ()=>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[id].classList.add('active');
    });
  });
  
 
 

