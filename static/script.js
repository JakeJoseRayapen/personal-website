// hamburger for mobile users

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click' , () => {
    const visibilty = primaryNav.getAttribute('data-visible');
    if (visibilty === 'false'){
        primaryNav.setAttribute('data-visible' , true);
        navToggle.setAttribute('aria-expanded',true);
    } else if (visibilty === 'true'){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded' , false)
    }
});


// icon functionality 
const scroll = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const topLink = window.pageYOffset;
    if(topLink > 500) {
        scroll.classList.add('show-link');
        console.log(topLink);
    } else {
        scroll.classList.remove('show-link');
    }
});

// tv glow on projects section
let backGround = document.querySelector('#background');
let purple1 = document.querySelectorAll('#purple-1');
let purple2 = document.querySelectorAll('#purple-2');
let purple3 = document.querySelector('#purple-3')
let purple4 = document.querySelector('#purple-4');
let image = document.querySelector('#image-tv');
let tvButtons = document.querySelectorAll('.tv-button a');



window.addEventListener('scroll',()=>{
    const topLink = window.pageYOffset;
    if(screen.width < 481){

        purple1.forEach( purp => 
                {
            if(topLink > 2141 && topLink < 4000){
                    purp.classList.add('tv-glow');
            } else {
                purp.classList.remove('tv-glow');
            }
        });

        setTimeout( () => {
            purple2.forEach( purp => {
                if(topLink > 2141 && topLink < 4000){
                    purp.classList.add('tv-glow');
                } else {
                    purp.classList.remove('tv-glow');
                }
            });
        },1000);

        setTimeout( () => {
            if(topLink > 2141 && topLink < 4000){
                purple3.classList.add('purple-glow');
            } else {
                purple3.classList.remove('purple-glow');
            }
        },2000);

        setTimeout( () => {
            if(topLink > 2141 && topLink < 4000){
                purple4.classList.add('tv-glow');
            } else {
                purple4.classList.remove('tv-glow');

            }
        },3000);

        setTimeout( () => {
            if(topLink > 2141 && topLink < 4000) {
                backGround.classList.add('tv-screen')
            }else{
                backGround.classList.remove('tv-screen')
                }
        },4000);

        setTimeout( () => {
            if(topLink > 2141 && topLink <4000) {
                image.classList.add('image-tv');
            }else{
                image.classList.remove('image-tv');
            }
        },4500);


        setTimeout( () => {
                tvButtons.forEach( button => {
                    if(topLink > 2141 && topLink < 4000){
                        button.classList.add('hov');
                    }else{
                        button.classList.remove('hov');
                    }
                })
        },5500);

        }else if(screen.width >= 1025){

            purple1.forEach( purp => 
                {
            if(topLink > 3180 && topLink < 5000){
                    purp.classList.add('tv-glow');
            } else {
                purp.classList.remove('tv-glow');
            }
        });

        setTimeout( () => {
            purple2.forEach( purp => {
                if(topLink > 3180 && topLink < 5000){
                    purp.classList.add('tv-glow');
                } else {
                    purp.classList.remove('tv-glow');
                }
            });
        },1000);

        setTimeout( () => {
            if(topLink > 3180 && topLink < 5000){
                purple3.classList.add('purple-glow');
            } else {
                purple3.classList.remove('purple-glow');
            }
        },2000);

        setTimeout( () => {
            if(topLink > 3180 && topLink < 5000){
                purple4.classList.add('tv-glow');
            } else {
                purple4.classList.remove('tv-glow');

            }
        },3000);

        setTimeout( () => {
            if(topLink > 3180 && topLink < 5000) {
                backGround.classList.add('tv-screen')
            }else{
                backGround.classList.remove('tv-screen')
                }
        },4000);

        setTimeout( () => {
            if(topLink > 3180 && topLink <5000) {
                image.classList.add('image-tv');
            }else{
                image.classList.remove('image-tv');
            }
        },4500);


        setTimeout( () => {
                tvButtons.forEach( button => {
                    if(topLink > 3180 && topLink < 5000){
                        button.classList.add('hov');
                    }else{
                        button.classList.remove('hov');
                    }
                })
        },5500)
    } else if(screen.width >= 768 && screen.width <= 1024){
        purple1.forEach( purp => 
            {
        if(topLink > 2750 && topLink < 4500){
                purp.classList.add('tv-glow');
        } else {
            purp.classList.remove('tv-glow');
        }
    });

    setTimeout( () => {
        purple2.forEach( purp => {
            if(topLink > 2750 && topLink < 4500){
                purp.classList.add('tv-glow');
            } else {
                purp.classList.remove('tv-glow');
            }
        });
    },1000);

    setTimeout( () => {
        if(topLink > 2750 && topLink < 4500){
            purple3.classList.add('purple-glow');
        } else {
            purple3.classList.remove('purple-glow');
        }
    },2000);

    setTimeout( () => {
        if(topLink > 2750 && topLink < 4500){
            purple4.classList.add('tv-glow');
        } else {
            purple4.classList.remove('tv-glow');

        }
    },3000);

    setTimeout( () => {
        if(topLink > 2750 && topLink < 4500) {
            backGround.classList.add('tv-screen')
        }else{
            backGround.classList.remove('tv-screen')
            }
    },4000);

    setTimeout( () => {
        if(topLink > 2750 && topLink <4500) {
            image.classList.add('image-tv');
        }else{
            image.classList.remove('image-tv');
        }
    },4500);


    setTimeout( () => {
            tvButtons.forEach( button => {
                if(topLink > 2750 && topLink < 4500){
                    button.classList.add('hov');
                }else{
                    button.classList.remove('hov');
                }
            })
    },5500);
    };
    

});

let green1 = document.querySelectorAll('#green-1');
let green2 = document.querySelectorAll('#green-2');
let green3 = document.querySelector('#green-3');
let greenPower = document.querySelector('#green-power');
let xpozeBack = document.querySelector('#xpoze-background');
let xpoze = document.querySelector('#xpoze-1');
let greenVest = document.querySelectorAll('#green-vest');
let xpozeButtons = document.querySelector('.xpoze-button a')


window.addEventListener('scroll', () => {
    const topLink = window.pageYOffset;
    if(screen.width < 481){
    setTimeout( () => {
        green1.forEach( green => {
            if(topLink > 2700 && topLink < 3700 ){
                green.classList.add('purple-tv');
            }else{
                green.classList.remove('purple-tv');
            }
        })
    })

    setTimeout( () => {
        green2.forEach( green => {
        if(topLink > 2700 && topLink < 3700){
            green.classList.add('purple-tv');
        }else{
            green.classList.remove('purple-tv');
        }
    })
    },1000)

    setTimeout( () => {
        if( topLink > 2700 && topLink < 3700 ){
            green3.classList.add('purple-tv');
        }else{
            green3.classList.remove('purple-tv');
        }
    },2000)

    setTimeout( () => {
        if(topLink > 2700 && topLink < 3700){
            greenPower.classList.add('purple-tv');
        }else{
            greenPower.classList.remove('purple-tv');
        }
    },3000)

    setTimeout( () => {
            greenVest.forEach( vest => {
        if(topLink > 2700 && topLink < 3700){
            vest.classList.add('purple-tv');
            }else {
                vest.classList.remove('purple-tv');
            }
        })
    },4000)

    setTimeout( () => {
        if(topLink > 2700 && topLink < 3700){
            xpozeBack.classList.add('xpoze-background');
        }else{
            xpozeBack.classList.remove('xpoze-background');
        }
    },5000)

    setTimeout( () => {
        if(topLink > 2700 && topLink < 3700){
            xpoze.classList.add('xpoze-image');
        }else{
            xpoze.classList.remove('xpoze-image');
        }
    },5000)

    setTimeout( () => {
        if(topLink > 2700 && topLink < 3700){
            xpozeButtons.classList.add('hov');
        }else{
            xpozeButtons.classList.remove('hov');
        }
    },5500)

    }else if(screen.width >= 1025){
        setTimeout( () => {
            green1.forEach( green => {
                if(topLink > 3800 && topLink < 5000 ){
                    green.classList.add('purple-tv');
                }else{
                    green.classList.remove('purple-tv');
                }
            })
        })
    
        setTimeout( () => {
            green2.forEach( green => {
            if(topLink > 3800 && topLink < 5000){
                green.classList.add('purple-tv');
            }else{
                green.classList.remove('purple-tv');
            }
        })
        },1000)
    
        setTimeout( () => {
            if( topLink > 3800 && topLink < 5000 ){
                green3.classList.add('purple-tv');
            }else{
                green3.classList.remove('purple-tv');
            }
        },2000)
    
        setTimeout( () => {
            if(topLink > 3800 && topLink < 5000){
                greenPower.classList.add('purple-tv');
            }else{
                greenPower.classList.remove('purple-tv');
            }
        },3000)
    
        setTimeout( () => {
                greenVest.forEach( vest => {
            if(topLink > 3800 && topLink < 5000){
                vest.classList.add('purple-tv');
                }else {
                    vest.classList.remove('purple-tv');
                }
            })
        },4000)
    
        setTimeout( () => {
            if(topLink > 3800 && topLink < 5000){
                xpozeBack.classList.add('xpoze-background');
            }else{
                xpozeBack.classList.remove('xpoze-background');
            }
        },5000)
    
        setTimeout( () => {
            if(topLink > 3800 && topLink < 5000){
                xpoze.classList.add('xpoze-image');
            }else{
                xpoze.classList.remove('xpoze-image');
            }
        },5000)
    
        setTimeout( () => {
            if(topLink > 3800 && topLink < 5000){
                xpozeButtons.classList.add('hov');
            }else{
                xpozeButtons.classList.remove('hov');
            }
        },5500)    
    }
})




// opening image slider on projects page
let imageSlider = document.querySelector('.image-slider');
let blur = document.getElementById('blur');
let popUp = document.querySelector('#carouselExampleFade');
let project1 = document.querySelector('.project1');
let projectsHeader = document.querySelector('.projects-header');
let linkedIn = document.querySelector('.linked-in');
let xpozE = document.querySelector('.xpoze');

imageSlider.addEventListener('click', () => {
    popUp.classList.add('visible');
    blur.classList.add('active');
    blur.style.width = '100%';
    project1.style.display = "none";
    projectsHeader.style.display = "none";
    xpozE.style.display = 'none';
});

blur.addEventListener('click', (event) => {
    if(event.target.classList.contains('active')){
        popUp.classList.remove('visible');
        blur.classList.remove('active');
        project1.style.display = "block";
        projectsHeader.style.display = "block";
        blur.style.width = '90%';
        xpozE.style.display = 'block';
    }
})

linkedIn.addEventListener('click',() => {
    const topLink = window.pageYOffset;
    console.log(topLink);
})

let list = document.querySelectorAll('.sci li');
let bg1 = document.querySelector('.section4');

list.forEach( el => {
    el.addEventListener('mouseenter', (event) =>{
        let color = event.target.getAttribute('data-color');
        bg1.style.backgroundColor = color;
    })
    el.addEventListener('mouseleave', (event) =>{
        let color = event.target.getAttribute('data-color');
        bg1.style.backgroundColor = 'transparent';
    })
})

let box = document.querySelector('.box');
let left = document.querySelector('#Left')
let right = document.querySelector('#Right')
let bottom = document.querySelector('#Bottom')
let front = document.querySelector('#Front')
let back = document.querySelector('#Back')
let toP = document.querySelector('#Top')


document.querySelector('.box-button').addEventListener('click', () => {
    box.style.animation = 'none';
    left.style.right = '180px';
    right.style.left = '180px';
    toP.style.bottom = '180px';
    bottom.style.top = '180px';
    back.style.transform = 'translateZ(-180px)';
    front.style.transform = 'translateZ(180px)';
    

    setTimeout( () => {
        setTimeout( () =>{
            bottom.style.top = '125px';
            setTimeout( () => {
                bottom.classList.add('fly')
                document.querySelector('.hobbies').style.display = 'block';
            },500)
    
        },500)
    
        setTimeout( () =>{
            toP.style.bottom = '125px';
            setTimeout( () => {
                toP.classList.add('fly')
            },500)
        },1500)
    
        setTimeout( () =>{
            left.style.right = '125px';
            setTimeout( ()=>{
                left.classList.add('fly')
            },500)
        },2500)
    
        setTimeout( () =>{
            right.style.left = '125px';
            setTimeout( ()=>{
                right.classList.add('fly')
            },700)
        },3300)
    
        setTimeout( () =>{
            back.style.transform = 'translateZ(-125px)';
            setTimeout( ()=>{
                back.classList.add('fly')
            },500)
        },4500)
    
        setTimeout( () =>{
            front.style.transform = 'translateZ(125px)';
            setTimeout( () =>{
                front.classList.add('fly')
            },500)
        },5500)
    },1000)

        setTimeout( () =>{
            anime.play;
        },7000)

})