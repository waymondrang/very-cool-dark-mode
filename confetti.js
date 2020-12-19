function startobserving() {
    var submitobserver = new MutationObserver(function (mutations, me) {
        var buttonexist = document.querySelectorAll("[jsname='sFeBqf']").length;
        if (buttonexist) {
            var secondsubmitobserver = new MutationObserver(function (mutations, me) {
                var button = document.querySelectorAll("[jsname='sFeBqf']").length;
                if (!button) {
                    me.disconnect(); //STOP OBSERVING
                    //SNOW BEGIN
                    if (false) {
                        var duration = 15 * 1000;
                        var animationEnd = Date.now() + duration;
                        var skew = 1;

                        function randomInRange(min, max) {
                            return Math.random() * (max - min) + min;
                        }

                        (function frame() {
                            var timeLeft = animationEnd - Date.now();
                            var ticks = Math.max(200, 500 * (timeLeft / duration));
                            skew = Math.max(0.8, skew - 0.001);

                            confetti({
                                particleCount: 1,
                                startVelocity: 0,
                                ticks: ticks,
                                gravity: 0.5,
                                origin: {
                                    x: Math.random(),
                                    // since particles fall down, skew start toward the top
                                    y: (Math.random() * skew) - 0.2
                                },
                                colors: ['#ffffff'],
                                shapes: ['circle'],
                                scalar: randomInRange(0.4, 1)
                            });

                            if (timeLeft > 0) {
                                requestAnimationFrame(frame);
                            }
                        }());
                        return
                        //SNOW END
                    }

                    //FIREWORK BEGIN
                    var duration = 1.5 * 1000;
                    var animationEnd = Date.now() + duration;
                    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    var interval = setInterval(function () {
                        var timeLeft = animationEnd - Date.now();

                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }

                        var particleCount = 200 * (timeLeft / duration);
                        // since particles fall down, start a bit higher than random
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                    }, 240);
                    startobserving();
                    return;
                }
            });

            //START OBSERVING
            secondsubmitobserver.observe(document, {
                childList: true,
                subtree: true
            });
            me.disconnect(); //STOP OBSERVING
            return;
        }
    });

    //START OBSERVING
    submitobserver.observe(document, {
        childList: true,
        subtree: true
    });
    return
}

startobserving()