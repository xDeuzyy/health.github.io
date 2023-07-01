let progress = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            progress.style.height = progressHeight + "%";
        }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function playSound(audioSound) {
    let audio = new Audio(audioSound);
    audio.loop = true;
    audio.volume = 1;
    audio.play(audioSound);
}
//playSound('notification.wav'); 



let restYourEyesMsg = '<i class="fa-solid fa-eye"></i> Rest Your Eyes';
let standUpMsg = '<i class="fa-solid fa-chair"></i> Stand Up';
let drinkWaterMsg = '<i class="fa-solid fa-whiskey-glass"></i> Drink Water';
    function showToast1(){
        var checkBox1 = document.getElementById("checkbox1");
        if (checkBox1.checked == true) {
            let toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = drinkWaterMsg;
            toastBox.appendChild(toast);
            setTimeout(()=>{
                toast.remove();
                
            },6000);
            setTimeout(showToast1, 18000); 
        }
        
        

        
        //playSound('notification.mp3');
    }
    function showToast2(){
        var checkBox2 = document.getElementById("checkbox2");
        if (checkBox2.checked == true) {
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = restYourEyesMsg;
        toastBox.appendChild(toast);

        if(restYourEyesMsg.includes('Eyes')) {
            toast.classList.add('eyes');
        }   
        setTimeout(()=>{
            toast.remove();
            
        },6000);
        setTimeout(showToast2, 12000);
    }
        //playSound('notification.mp3');
    }
    function showToast3(){
        var checkBox3 = document.getElementById("checkbox3");
        if (checkBox3.checked == true) {
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = standUpMsg;
        toastBox.appendChild(toast);
        
        if(standUpMsg.includes('Stand')) {
            toast.classList.add('stand');
        }

        setTimeout(()=>{
            toast.remove();
            
        },6000);
        setTimeout(showToast3, 36000); 
    }
        //playSound('notification.mp3');
    }
    
   
