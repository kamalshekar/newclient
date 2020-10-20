const socialArrow = document.querySelector('#social span'),
	socialIcon = document.querySelector('#social span img'),
	socialLinks = document.querySelector('#social .social-links')
	burger = document.querySelector('#burger'),
	navList = document.querySelector('nav'),
	header = document.querySelector('header '),
	listItems = document.querySelectorAll('nav ul li'),
	listItems1 = document.querySelector('nav ul'),
	burgerLines = document.querySelectorAll('#burger div'),
	gainLogo = document.querySelector('header a img'),
	fabicon = document.querySelector('.nav_socail_Section'),
	navimagefab=document.querySelectorAll('.nav_socail_Section > i '),
	socialLinksnavbar = document.querySelector('.nav_socail_Section')
	faqs = document.querySelectorAll('.faq-item p'),
	faqImgs = document.querySelectorAll('.faq-item img');

// To redirect to main page when logo is clicked

function sad(){
	window.location.href= '/index.html';
}
faqImgs.forEach((faqImg,i)=>{
	faqImg.addEventListener('click',()=>{
		faqs[i].classList.toggle('showAnswer');
	})
})

// navbar code, header
let i = 0;
burger.addEventListener('click',()=>{
	burger.classList.toggle('toggle')
	navList.classList.toggle('active')
	// setting i to 0 so that when it goes above the item count then it reverts back to usual
	if(i !== 0) i = 0;
	navItemLoop();
})

// This loop allows items to be fade in one by one into the view
// this is made like this since setTimeOut is non blocking and will not work directly in a loop
const navItemLoop = () =>{
	setTimeout(()=>{
		listItems[i].classList.toggle('moveInItem');
		i++;
		if(i<5){
			navItemLoop();
		}
	},50)
}

// scrolling effect
window.addEventListener('scroll',()=>{
	let scrollVal = window.pageYOffset;
	if(scrollVal>90){
	
		header.style.boxShadow = '0 .3rem .8rem rgba(0,0,0,0.25)';
		header.style.backgroundColor = '#ffffffb0';
		gainLogo.style.width = '6rem';
		fabicon.style.color="#0D64BB";
		listItems1.classList.add('HoverClass1');
		gainLogo.style.paddingTop = '0rem';
		fabicon.style.fontSize="22px";
		fabicon.style.paddingTop="1rem";
		fabicon.style.paddingRight="1.5rem";
	}
	else{
		header.style.backgroundColor = 'white';
		header.style.boxShadow = 'none';
	 gainLogo.style.width = '9.5rem';
		fabicon.style.color="white";
		listItems1.classList.remove('HoverClass1');
		fabicon.style.fontSize="32px";
		fabicon.style.paddingRight="1.5rem";
		fabicon.style.paddingTop="0.5rem";
		// gainLogo.style.paddingTop = '1rem';
	}
})


// social links toggler
socialArrow.addEventListener('click',()=>{
	socialLinks.classList.toggle('moveLeftSocial');
	socialIcon.classList.toggle('rotateSocial');
})

function sa(){
	
// 	window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
// 	alert()
}
