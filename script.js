console.log("welcome to adore");


// searchbr
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("stikymenu");
    let padind = document.getElementById("padding")

    if(window.pageYOffset >= 112.6){
        navbar.classList.add('sticky');
        padind.classList.add('bottommargin');
        document.getElementById("padding").style.marginTop = 70;

    } else{
        navbar.classList.remove('sticky');
        padind.classList.remove('bottommargin');
    }
    // console.log(window);
});

// menu_bar
let menubar = document.getElementById('menu_bar');
menubar.addEventListener('click', ()=>{
    var element = document.getElementById("menu22");
    element.classList.toggle("open2");
  })
// menu_barend
// searchabar
function showResult(str) {
    if (str.length==0) {
      document.getElementsByClassName("livesearch").innerHTML="";
      document.getElementsByClassName("livesearch").style.border="0px";
      return;
    }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementsByClassName("livesearch").innerHTML=this.responseText;
        // document.getElementsByClassName("livesearch").style.border="1px solid #A5ACB2";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str,true);
    xmlhttp.send();
    console.log(showResult);
  }
//   searchbarend
let w = document.getElementById("wellcome");
let dropDoenValue=0;

function best70s(){
  dropDoenValue=1;
  let x =   document.getElementById("best-70s").style.display = "block";
  let y =  document.getElementById("best-90s").style.display = "none";
  let z =  document.getElementById("best-punjabi").style.display = "none";
  let s = document.getElementById("select").style.display = "none";
  let w = document.getElementById("wellcome").style.display = "none";
  let r = document.getElementById("best-rajasthani").style.display = "none";
  let b = document.getElementById("best-haryanwi").style.display = "none";
  document.getElementById('back').style.backgroundImage = "url(./images/best70sjpg.jpg)" ;
  document.getElementById('70s').style.color = "white";
}
function best90s(){
  dropDoenValue=2;

    let y =  document.getElementById("best-90s").style.display = "block";
    let x =   document.getElementById("best-70s").style.display = "none";
    let z =  document.getElementById("best-punjabi").style.display = "none";
    let s = document.getElementById("select").style.display = "none";
    let w = document.getElementById("wellcome").style.display = "none";
    let r = document.getElementById("best-rajasthani").style.display = "none";
    let b = document.getElementById("best-haryanwi").style.display = "none";
    document.getElementById('back').style.backgroundImage = "url(./images/best90s.jpg)" ;
  document.getElementById("90s").style.color = "white";
}
function bestpunjabi(){
  dropDoenValue=3;

  let z =  document.getElementById("best-punjabi").style.display = "block";
  let x =   document.getElementById("best-70s").style.display = "none";
  let y =  document.getElementById("best-90s").style.display = "none";
  let s = document.getElementById("select").style.display = "none";
  let w = document.getElementById("wellcome").style.display = "none";
  let r = document.getElementById("best-rajasthani").style.display = "none";
  let b = document.getElementById("best-haryanwi").style.display = "none";
  document.getElementById('back').style.backgroundImage = "url(./images/bestpunjabi.jpg)" ;
}
function bestrajasthani(){
    dropDoenValue=4;
    let r = document.getElementById("best-rajasthani").style.display = "block";
    let z =  document.getElementById("best-punjabi").style.display = "none";
    let x =   document.getElementById("best-70s").style.display = "none";
    let y =  document.getElementById("best-90s").style.display = "none";
    let s = document.getElementById("select").style.display = "none";
    let w = document.getElementById("wellcome").style.display = "none";
    let b = document.getElementById("best-haryanwi").style.display = "none";
  document.getElementById('back').style.backgroundImage = "url(./images/bestrajssthani.jpg)" ;
    document.getElementById("rajasthani").style.color = "white";
  }
  function bestharyanwi(){
    dropDoenValue=5;
      let b = document.getElementById("best-haryanwi").style.display = "block";
    let z =  document.getElementById("best-punjabi").style.display = "none";
    let x =   document.getElementById("best-70s").style.display = "none";
    let y =  document.getElementById("best-90s").style.display = "none";
    let s = document.getElementById("select").style.display = "none";
    let w = document.getElementById("wellcome").style.display = "none";
    let r = document.getElementById("best-rajasthani").style.display = "none";
  document.getElementById('back').style.backgroundImage = "url(./images/bestharyanwi.jpg)" ;
  }
function select(){
   let s = document.getElementById("select").style.display = "block";
    let x =   document.getElementById("best-70s").style.display = "none";
    let y =  document.getElementById("best-90s").style.display = "none";
  let z =  document.getElementById("best-punjabi").style.display = "none";
  let w = document.getElementById("wellcome").style.display = "none";
  let r = document.getElementById("best-rajasthani").style.display = "none";
  mastersongname = "";
  let b = document.getElementById("best-haryanwi").style.display = "none";
}

let songIndex = 0;
let audioElement = new Audio('music/first70/1.mp3')
let masterplays = document.getElementsByClassName('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songitems2 = Array.from(document.getElementsByClassName('songitem2'));
let songitems3 = Array.from(document.getElementsByClassName('songitem3'));
let songitems4 = Array.from(document.getElementsByClassName('songitem4'));
let songitems5 = Array.from(document.getElementsByClassName('songitem5'));
let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
let background = Array.from(document.getElementsByClassName('bg'));
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let volume_icon = document.getElementById('volume_icon')
let mastersongname =document.getElementById('mastersongname');
let endduration = document.getElementById('endduration');
let songs = [
    {songname: "Aaj mousam bda beimaan hai", filepath: "music/first70/1.mp3", coverpath: "images/first70/1.jpg", timepath: "04:11", background: "images/first70/1.jpg"},
    {songname: "Jis-Desh-Mein-Ganga-Rehta-hai", filepath: "music/first70/2.mp3", coverpath: "images/first70/2.jpg", timepath: "02:02", background: "bg/best70/2.jpg"},
    {songname: "Ek-Pyar-ka-Nagma-hai", filepath: "music/first70/3.mp3", coverpath: "images/first70/3.jpg", timepath: "06:29", background: "bg/best70/1.jpg"},
    {songname: "Nye-Mai-se-meena-se-Na-saqi-se", filepath: "music/first70/4.mp3", coverpath: "images/first70/4.jpg", timepath: "06:50", background: "bg/best70/1.jpg"},
    {songname: "Gulabi-Aankhen-Jo-Teri-Dekhi", filepath: "music/first70/5.mp3", coverpath: "images/first70/5.jpg", timepath: "03:43", background: "bg/best70/5.jpg"},
]

songitems.forEach((element, i)=>{
    element.getElementsByClassName("img1")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    element.getElementsByClassName('timestamp')[0].innerText = songs[i].timepath;
   
});
let songs2 = [
    {songname2: "Tum Agar Samne", filepath2: "music/best90s/1.mp3", coverpath2: "images/best90s/1.jpg", timepath2: "05:46", background: "bg/best90s/1.jpg"},
    {songname2: "Chaaha Hai Tujhko ", filepath2: "music/best90s/2.mp3", coverpath2: "images/best90s/2.jpg", timepath2: "4:41", background: "bg/best90s/2.jpg"},
    {songname2: "Chura Ke Dil Mera", filepath2: "music/best90s/3.mp3", coverpath2: "images/best90s/3.jpg", timepath2: "07:54", background: "bg/best90s/3.jpg"},
    {songname2: "Hum Tumko Nigahon Mein", filepath2: "music/best90s/4.mp3", coverpath2: "images/best90s/4.jpg", timepath2: "06:06", background: "bg/best90s/4.jpg"},
    {songname2: "Jab Tum Aa Jaate Ho ", filepath2: "music/best90s/5.mp3", coverpath2: "images/best90s/5.jpg", timepath2: "06:47", background: "bg/best90s/5.jpg"},
]
// console.log(songs[2][0]);
songitems2.forEach((element, i)=>{
    element.getElementsByClassName("img2")[0].src = songs2[i].coverpath2;
    element.getElementsByClassName("songname2")[0].innerText = songs2[i].songname2;
    element.getElementsByClassName('timestamp2')[0].innerText = songs2[i].timepath2;
   
});
let songs3 = [
    {songname3: "Impress", filepath3: "music/punjabi/1.mp3", coverpath3: "images/punjabi/1.jpg", timepath3: "03:43", background: "bg/punjabi/1.jpg"},
    {songname3: "Laung Laachi", filepath3: "music/punjabi/2.mp3", coverpath3: "images/punjabi/2.jpg", timepath3: "02:40", background: "bg/punjabi/2.jpg"},
    {songname3: "Mere Wala Sardar", filepath3: "music/punjabi/3.mp3", coverpath3: "images/punjabi/3.jpg", timepath3: "05:16", background: "bg/punjabi/3.jpg"},
    {songname3: "Naah ", filepath3: "music/punjabi/4.mp3", coverpath3: "images/punjabi/4.jpg", timepath3: "03:10", background: "bg/punjabi/5.jpg"},
    {songname3: "Pyar Da Saboot", filepath3: "music/first70/5.mp3", coverpath3: "images/punjabi/5.jpg", timepath3: "02:56", background: "bg/punjabi/5.jpg"},
]

songitems3.forEach((element, i)=>{
    element.getElementsByClassName("img3")[0].src = songs3[i].coverpath3;
    element.getElementsByClassName("songname3")[0].innerText = songs3[i].songname3;
    element.getElementsByClassName('timestamp3')[0].innerText = songs3[i].timepath3;
   
});
let songs4 = [
    {songname4: "Piya Aao", filepath4: "music/rajasthani/1.mp3", coverpath4: "images/rajasthani/1.jpg", timepath4: "04:53", background: "bg/rajasthani/1.jpg"},
    {songname4: "Ghoomar", filepath4: "music/rajasthani/2.mp3", coverpath4: "images/rajasthani/2.jpg", timepath4: "04:42", background: "bg/rajasthani/2.jpg"},
    {songname4: "Kajaliyo", filepath4: "music/rajasthani/3.mp3", coverpath4: "images/rajasthani/3.jpg", timepath4: "03:22", background: "bg/rajasthani/3.jpg"},
    {songname4: "Mari manisha ki yahi pahchan", filepath4: "music/rajasthani/4.mp3", coverpath4: "images/rajasthani/4.jpg", timepath4: "14:56", background: "bg/rajasthani/4.jpg"},
    {songname4: "lilan mari cham cham karti aaje", filepath4: "music/rajasthani/5.mp3", coverpath4: "images/rajasthani/5.jpg", timepath4: "04:45", background: "bg/rajasthani/5.jpg"},
]

songitems4.forEach((element, i)=>{
    element.getElementsByClassName("img4")[0].src = songs4[i].coverpath4;
    element.getElementsByClassName("songname4")[0].innerText = songs4[i].songname4;
    element.getElementsByClassName('timestamp4')[0].innerText = songs4[i].timepath4;
   
});
let songs5 = [
    {songname5: "beham", filepath5: "music/haryanvi/1.mp3", coverpath5: "images/haryanvi/1.jpg", timepath5: "03:57", background: "bg/haryanvi/1.jpg"},
    {songname5: "ghunghat 3", filepath5: "music/haryanvi/2.mp3", coverpath5: "images/haryanvi/2.jpg", timepath5: "02:45", background: "bg/haryanvi/2.jpg"},
    {songname5: "52 gaj ka daman", filepath5: "music/haryanvi/3.mp3", coverpath5: "images/haryanvi/3.jpg", timepath5: "02:43", background: "bg/haryanvi/1.jpg"},
    {songname5: "Desi Desi Na Bolya Kar", filepath5: "music/haryanvi/4.mp3", coverpath5: "images/haryanvi/4.jpg", timepath5: "03:37", background: "bg/haryanvi/1.jpg"},
    {songname5: "Kale Je Libaas Di", filepath5: "music/haryanvi/5.mp3", coverpath5: "images/haryanvi/5.jpg", timepath5: "04:27", background: "bg/haryanvi/1.jpg"},
]

songitems5.forEach((element, i)=>{
    element.getElementsByClassName("img5")[0].src = songs5[i].coverpath5;
    element.getElementsByClassName("songname5")[0].innerText = songs5[i].songname5;
    element.getElementsByClassName('timestamp5')[0].innerText = songs5[i].timepath5;
   
});


document.getElementById("masterplay").addEventListener('click', function(){
    var onmiddlevolume = audioElement.currentTime;
    if(audioElement.paused || onmiddlevolume<=0){
        audioElement.play();
        //  audioElement.currentTime = mainvalume;
        // audioElement.currentTime = mainvolume;


        console.log(audioElement.currentTime);
        document.getElementById("masterplay").classList.remove('fa-play');
        document.getElementById("masterplay").classList.add('fa-pause');
        gif.style.opacity = 1;
            mastersongname.innerText= songs[songIndex].songname;
            document.getElementById('max-duration').innerText = songs[songIndex].timepath;
            // document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
            audioElement.src = `music/first70/${songIndex +1}.mp3`;
        if(mastersongname.innerText == songs[songIndex].songname){
            dropDoenValue = 1
            best70s();
        }
        if(dropDoenValue == 1){
            document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs[songIndex].songname;
            audioElement.src = `music/first70/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs[songIndex].timepath;
            
            } 
            if(dropDoenValue == 2){
            document.getElementById("back").style.backgroundImage = `url('images/best90s/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs2[songIndex].songname2;
            audioElement.src = `music/best90s/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs2[songIndex].timepath2;
    
            }
            if(dropDoenValue == 3){
            document.getElementById("back").style.backgroundImage = `url('images/punjabi/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs3[songIndex].songname3;
            audioElement.src = `music/punjabi/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs3[songIndex].timepath3;
    
            }
            if(dropDoenValue == 4){
            document.getElementById("back").style.backgroundImage = `url('images/rajasthani/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs4[songIndex].songname4;
            audioElement.src = `music/rajasthani/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs4[songIndex].timepath4;
    
            }
            if(dropDoenValue == 5){
            document.getElementById("back").style.backgroundImage = `url('images/haryanvi/${songIndex +1}.jpg')`;
            document.getElementById('max-duration').innerText = songs5[songIndex].timepath5;
            audioElement.src = `music/haryanvi/${songIndex +1}.mp3`;
            mastersongname.innerText= songs5[songIndex].songname5;
            } else{
                audioElement.play();
            }
        
    } else{
        audioElement.pause();
        // onmiddlevolume();
        console.log(onmiddlevolume);
        document.getElementById("masterplay").classList.remove('fa-pause');
        document.getElementById("masterplay").classList.add('fa-play');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    let currentTime = audioElement.currentTime;
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;

let musicCurrentTime = document.getElementById("current-time");

 let currentMin = Math.floor(currentTime / 60);
 let currentSec = Math.floor(currentTime % 60);
 musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`;

});
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;

    
});
let progress = myprogressbar.value;
function getCurTime(progress) { 
    var hours = Math.floor(progress / 60);  
    var minutes = progress % 60;

  } 

const makeALLplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    
         element.classList.remove('fa-pause');
         element.classList.add('fa-play');
        });
};

const songss = [songs, songs2, songs3, songs4, songs5]
// console.log(songss[0][5].songname);
// console.log(songss[1][1]);


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myprogressbar.value = progress;
        if(audioElement.paused || audioElement.currentTime<=0){
            makeALLplays();
            songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
        debugger
        if(dropDoenValue == 1){
        document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
        mastersongname.innerText= songs[songIndex].songname;
        audioElement.src = `music/first70/${songIndex +1}.mp3`;
        document.getElementById('max-duration').innerText = songs[songIndex].timepath;
        
        } 
        if(dropDoenValue == 2){
        document.getElementById("back").style.backgroundImage = `url('images/best90s/${songIndex +1}.jpg')`;
        mastersongname.innerText= songs2[songIndex].songname2;
        audioElement.src = `music/best90s/${songIndex +1}.mp3`;
        document.getElementById('max-duration').innerText = songs2[songIndex].timepath2;

        }
        if(dropDoenValue == 3){
        document.getElementById("back").style.backgroundImage = `url('images/punjabi/${songIndex +1}.jpg')`;
        mastersongname.innerText= songs3[songIndex].songname3;
        audioElement.src = `music/punjabi/${songIndex +1}.mp3`;
        document.getElementById('max-duration').innerText = songs3[songIndex].timepath3;

        }
        if(dropDoenValue == 4){
        document.getElementById("back").style.backgroundImage = `url('images/rajasthani/${songIndex +1}.jpg')`;
        mastersongname.innerText= songs4[songIndex].songname4;
        audioElement.src = `music/rajasthani/${songIndex +1}.mp3`;
        document.getElementById('max-duration').innerText = songs4[songIndex].timepath4;

        }
        if(dropDoenValue == 5){
        document.getElementById("back").style.backgroundImage = `url('images/haryanvi/${songIndex +1}.jpg')`;
        document.getElementById('max-duration').innerText = songs5[songIndex].timepath5;
        audioElement.src = `music/haryanvi/${songIndex +1}.mp3`;
        mastersongname.innerText= songs5[songIndex].songname5;
        } 

        audioElement.play();
        document.getElementById("masterplay").classList.remove('fa-play');
        document.getElementById("masterplay").classList.add('fa-pause');
        gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        document.getElementById("masterplay").classList.remove('fa-pause');
        document.getElementById("masterplay").classList.add('fa-play');
        gif.style.opacity = 0;
        }
 
    })

})
document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex >=4){
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    if(dropDoenValue == 1){0
        audioElement.src = `music/first70/${songIndex + 1}.mp3`;
        document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
                mastersongname.innerText= songs[songIndex].songname;
            document.getElementById('max-duration').innerText = songs[songIndex].timepath;



        } 
        if(dropDoenValue == 2){
            document.getElementById("back").style.backgroundImage = `url('images/best90s/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs2[songIndex].songname2;
            audioElement.src = `music/best90s/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs2[songIndex].timepath2;
     
        }
        if(dropDoenValue == 3){
            document.getElementById("back").style.backgroundImage = `url('images/punjabi/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs3[songIndex].songname3;
            audioElement.src = `music/punjabi/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs3[songIndex].timepath3;
        }
        if(dropDoenValue == 4){
            document.getElementById("back").style.backgroundImage = `url('images/rajasthani/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs4[songIndex].songname4;
            audioElement.src = `music/rajasthani/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs4[songIndex].timepath4;
        }
        if(dropDoenValue == 5){
            document.getElementById("back").style.backgroundImage = `url('images/haryanvi/${songIndex +1}.jpg')`;
            document.getElementById('max-duration').innerText = songs5[songIndex].timepath5;
            audioElement.src = `music/haryanvi/${songIndex +1}.mp3`;
            mastersongname.innerText= songs5[songIndex].songname5;
        } 
        audioElement.currentTime = 0;
        audioElement.play();
})
document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 4;
    } else {
        songIndex -= 1;
    }
    
    if(dropDoenValue == 1){0
        audioElement.src = `music/first70/${songIndex + 1}.mp3`;
        document.getElementById("back").style.backgroundImage = `url('images/first70/${songIndex +1}.jpg')`;
                mastersongname.innerText= songs[songIndex].songname;
            document.getElementById('max-duration').innerText = songs[songIndex].timepath;


        } 
        if(dropDoenValue == 2){
            document.getElementById("back").style.backgroundImage = `url('images/best90s/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs2[songIndex].songname2;
            audioElement.src = `music/best90s/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs2[songIndex].timepath2;
        }
        if(dropDoenValue == 3){
            document.getElementById("back").style.backgroundImage = `url('images/punjabi/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs3[songIndex].songname3;
            audioElement.src = `music/punjabi/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs3[songIndex].timepath3;
        }
        if(dropDoenValue == 4){
            document.getElementById("back").style.backgroundImage = `url('images/rajasthani/${songIndex +1}.jpg')`;
            mastersongname.innerText= songs4[songIndex].songname4;
            audioElement.src = `music/rajasthani/${songIndex +1}.mp3`;
            document.getElementById('max-duration').innerText = songs4[songIndex].timepath4;
        }
        if(dropDoenValue == 5){
            document.getElementById("back").style.backgroundImage = `url('images/haryanvi/${songIndex +1}.jpg')`;
            document.getElementById('max-duration').innerText = songs5[songIndex].timepath5;
            audioElement.src = `music/haryanvi/${songIndex +1}.mp3`;
            mastersongname.innerText= songs5[songIndex].songname5;
        } 
        audioElement.currentTime = 0;
        audioElement.play();

});

document.getElementById("right").addEventListener('click', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    audioElement.currentTime = (myprogressbar.value * audioElement.duration/100) + 10;
    console.log(progress);
});
document.getElementById("left").addEventListener('click', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    audioElement.currentTime = (myprogressbar.value * audioElement.duration/100) - 10;
    console.log(progress);
});
let mute_sound = document.getElementById('volume_icon');
let volume_change = document.getElementById('volume');


  volume_change.addEventListener('change', ()=>{
    volume_show.innerHTML = recent_volume.value;
    audioElement.volume = recent_volume.value / 100;
    audioElement.value = 0;
    if(recent_volume.value == 0){
        document.getElementById('volume_icon').classList.remove('fa-volume-up');
        document.getElementById('volume_icon').classList.add('fa-volume-down');
    } else{
        document.getElementById('volume_icon').classList.remove('fa-volume-down');
        document.getElementById('volume_icon').classList.add('fa-volume-up');
    }
  
  });
  
mute_sound.addEventListener('click', ()=>{
    let current_valume = volume_change.value;
    if(current_valume != 0){
    audioElement.volume = 0;
    volume_show.innerHTML = 0;
    document.getElementById('volume_icon').classList.remove('fa-volume-up');
    document.getElementById('volume_icon').classList.add('fa-volume-down');
    console.log(current_valume);
    console.log(volume.value);
}
//  else if(current_valume = 0 || volume.value == 0) {
//     console.log(mute_sound);
//     console.log(volume.value);
//     // volume_change.value = 20;
//     volume_show.innerHTML = 20;
//     audioElement.volume = 20;
//     // audioElement.value = 20;
//     // volume.value = 20;
//     document.getElementById('volume_icon').classList.add('fa-volume-up');
//     document.getElementById('volume_icon').classList.remove('fa-volume-down');
// }
 else if(current_valume == 0){
    audioElement.volume = 20;
    volume_show.innerHTML = 20;
    console.log(current_valume);
    console.log(volume.value);
}
  });


if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
  console.info(performance.timeOrigin);
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    audioElement.pause();
    console.info( "This page is reloaded" );
  } else {
    console.info( "This page is not reloaded");
    audioElement.play();
  }
