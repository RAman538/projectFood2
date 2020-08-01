function timer(id, start) {

        function getTimeRemaining(begin) {

            const t = Date.parse(begin) - Date.parse(new Date()),
                  days = Math.floor(t/ (1000 * 60 * 60 * 24)),
                  hours = Math.floor((t/ (1000 * 60 * 60)) %24),
                  minutes = Math.floor((t/ (1000 * 60)) %60),
                  seconds = (t/ (1000)) %60;

            return {
                t,
                days,
                hours,
                minutes,
                seconds
            };
        }

        function getZero(num) {

            if (num > 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, begin) {

            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

                updateClock();

            function updateClock() {

                const t = getTimeRemaining(begin);

                days.textContent = getZero(t.days);
                hours.textContent = getZero(t.hours);
                minutes.textContent = getZero(t.minutes);
                seconds.textContent = getZero(t.seconds);

                        if (t.t <= 0) {

                            clearInterval(timeInterval);

                            days.textContent = '88';
                            hours.textContent = '88';
                            minutes.textContent = '88';
                            seconds.textContent = '88';
                        }
            }

        }
        setClock(id, start);
}

export default timer;