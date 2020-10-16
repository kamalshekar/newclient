const socialArrow = document.querySelector('#social span'),
	socialIcon = document.querySelector('#social span img'),
	socialLinks = document.querySelector('#social .social-links')
	burger = document.querySelector('#burger'),
	navList = document.querySelector('nav'),
	header = document.querySelector('header '),
	listItems = document.querySelectorAll('nav ul li'),
	listItems1 = document.querySelector('nav ul'),
	burgerLines = document.querySelectorAll('#burger div'),
	gainLogo = document.querySelector('header>img'),
	fabicon = document.querySelector('.nav_socail_Section'),
	
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
		header.style.backgroundColor = 'white';
		// gainLogo.style.width = '4rem';
		fabicon.style.color="#0D64BB";
		listItems1.classList.add('HoverClass1');
	}
	else{
		header.style.backgroundColor = 'rgba(255,255,255,.5)';
		header.style.boxShadow = 'none';
		// gainLogo.style.width = '7rem';
		fabicon.style.color="white";
		listItems1.classList.remove('HoverClass1');
	}
})


// social links toggler
socialArrow.addEventListener('click',()=>{
	socialLinks.classList.toggle('moveLeftSocial');
	socialIcon.classList.toggle('rotateSocial');
})


window.onload = function () {

	window.scrollTo(0,0);
};