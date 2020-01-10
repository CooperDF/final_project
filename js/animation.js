gsap.registerPlugin(Draggable);

gsap.set("#volume-nob", {
    transformOrigin: "50% 50%"
});

gsap.set("#cassette", {
    transformOrigin: "50% 0%",
    translateY: 800
})


function vol() {
    var volu = 0;

    var drag = Draggable.create("#volume-nob", {
        type: "rotation",
        bounds: {
            minRotation: 0,
            maxRotation: 300
        },
        onDrag: function () {
            var progress = normalize(this.rotation, 0, 300);

            volu = progress;
                    console.log("progress =", volu);
            song.setVolume(volu);
            if (volu > 0.1) {
                TweenLite.to("#_Image8", 0.5, {
                    fill: "rgb(255,0,0)"
                });
            }
        }
    });

    function normalize(value, min, max) {
        return (value - min) / (max - min);
    }

}


var cog1 = TweenMax.to("#cog1", {
    rotation: -360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true,
    yoyo: false
});
var cog2 = TweenMax.to("#cog2", {
    rotation: -360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true,
    yoyo: false
});
var cog3 = TweenMax.to("#cog3", {
    rotation: -360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true,
    yoyo: false
});
var cog4 = TweenMax.to("#cog4", {
    rotation: -360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true,
    yoyo: false
});

var cods1 = TweenMax.to("#cog1", {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
});
var cods2 = TweenMax.to("#cog2", {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
});
var cods3 = TweenMax.to("#cog3", {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
});
var cods4 = TweenMax.to("#cog4", {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
});

document.getElementById('play').addEventListener('click', function (playing) {
    playing.preventDefault();
    if (playing) {
        cog1.play();
        cog2.play();
        cog3.play();
        cog4.play();
        cog1.duration(2);
        cog2.duration(2);
        cog3.duration(2);
        cog4.duration(2);
        cods1.paused(true);
        cods2.paused(true);
        cods3.paused(true);
        cods4.paused(true);
    }
});

document.getElementById('ff').addEventListener('click', function (faster) {
    faster.preventDefault();
    if (faster) {
        cog1.play();
        cog2.play();
        cog3.play();
        cog4.play();
        cog1.duration(0.5);
        cog2.duration(0.5);
        cog3.duration(0.5);
        cog4.duration(0.5);
        cods1.paused(true);
        cods2.paused(true);
        cods3.paused(true);
        cods4.paused(true);
    }
});

document.getElementById('rew').addEventListener('click', function (rewind) {
    rewind.preventDefault();
    cods1.play();
    cods2.play();
    cods3.play();
    cods4.play();
    cods1.duration(0.5);
    cods2.duration(0.5);
    cods3.duration(0.5);
    cods4.duration(0.5);

})

document.getElementById('stop').addEventListener('click', function (stopped) {
    stopped.preventDefault();
    if (stopped) {
        cog1.paused(true);
        cog2.paused(true);
        cog3.paused(true);
        cog4.paused(true);
        cods1.paused(true);
        cods2.paused(true);
        cods3.paused(true);
        cods4.paused(true);
    }
    document.getElementById('stop').addEventListener('dblclick', function () {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 800
        });
    });
});

document.getElementById('pause').addEventListener('click', function (paused) {
    paused.preventDefault();
    if (paused) {
        cog1.paused(true);
        cog2.paused(true);
        cog3.paused(true);
        cog4.paused(true);
        cods1.paused(true);
        cods2.paused(true);
        cods3.paused(true);
        cods4.paused(true);

    }
});


document.getElementById("logo").addEventListener('click', function (stopped) {
    stopped.preventDefault();
    if (stopped) {
        cog1.paused(true);
        cog2.paused(true);
        cog3.paused(true);
        cog4.paused(true);
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 800
        });
    }
});

document.getElementById('tapes1').addEventListener('click', function (putback) {
    if (putback) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
        new Audio('/sounds/click1.ogg').play();
    }
})

document.getElementById('tapes2').addEventListener('click', function (putback1) {
    if (putback1) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
    }
})

document.getElementById('tapes3').addEventListener('click', function (putback2) {
    if (putback2) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
    }
})

document.getElementById('tapes4').addEventListener('click', function (putback3) {
    if (putback3) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
    }
})

document.getElementById('tapes5').addEventListener('click', function (putback4) {
    if (putback4) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
    }
})

document.getElementById('tapes6').addEventListener('click', function (putback5) {
    if (putback5) {
        gsap.set("#cassette", {
            transformOrigin: "50% 0%"
        })
        gsap.to("#cassette", 1, {
            translateY: 0
        });
    }
})