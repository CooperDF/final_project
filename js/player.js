var song;
var x = 1;

//var micOn;
//var mic;
//var recorder;
//var soundFile;

function preload() {
    soundFormats('mp3', 'ogg');
    song1();
    song2();
    song3();
    song4();
    song5();
    song6();
}

function setup() {
    var canvas = createCanvas(0, 0);
//    mic = new p5.AudioIn();
//    micOn = false;
    
    canvas.parent('player');
    
//    mic.start();
    
//    recorder = new p5.SoundRecorder();
//    
//    recorder.setInput(mic);
//    soundFile = new p5.SoundFile();
    vol();
    buttons();
    
//    song.setVolume(0);
    
}

function draw() {

//    song.noLoop();
}

function song1() {
    song = loadSound('sounds/songs/C418 - stranger_think.mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0"

}

function song2() {
    song = loadSound('sounds/songs/Tuxedo - Do It.mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0";
}

function song3() {
    song = loadSound('sounds/songs/Plastic_Love_-_Caitlin_Myers.mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0";
    
}

function song4() {
    song = loadSound('sounds/songs/Sunrise (Final).mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0";
}

function song5() {
    song = loadSound('sounds/songs/Eli Way - Wave.mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0";
}

function song6() {
    song = loadSound('sounds/songs/Jack Stauber - Buttercup.mp3');
    song.setVolume(0);
    document.getElementById('sidenav').style.width = "0";
}

function buttons() {
    document.getElementById('play').addEventListener('click', function(){
        x = 1;
        song.playMode('untilDone');
        song.rate(x);
        song.play();
        document.getElementById('ff').addEventListener('click', function() {
            x = 4;
            song.rate(x);
        });
        document.getElementById('rew').addEventListener('click', function(rewind) {
//            x = -2;
//            var rev = song.duration() - song.currentTime();
//            console.log(rev);
////            somg.play();
            song.rate(-song.currentTime()/2);
        });
    });

    document.getElementById('stop').addEventListener('click', function(){
        x = 1;
        song.rate(x);
        song.pause();
        recorder.stop();
    });
    document.getElementById('pause').addEventListener('click', function(){
        x = 1;
        song.rate(x);
       song.pause(); 
    });
    document.getElementById('record').addEventListener('click', function() {
        alert("Maybe one day there will be the technology to record sound!");
//        micOn = !micOn;
//        
//        if (micOn) {
//            mic.start;
//            recorder.record(soundFile);
//        }else{
//            mic.stop();
//            recorder.stop();
//        }
});
    
}




function openNav() {
    document.getElementById("sidenav").style.width = "350px";
    song.stop();
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}