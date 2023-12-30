document.addEventListener('DOMContentLoaded', function () {
    function updateCountdown() {
        const currentTime = new Date();
        const newYearDate = new Date(currentTime.getFullYear() + 1, 0, 1);

        const timeDifference = newYearDate - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        updateCard('days', 'daysBack', days);
        updateCard('hours', 'hoursBack', hours);
        updateCard('minutes', 'minutesBack', minutes);
        updateCard('seconds', 'secondsBack', seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function updateCard(frontId, backId, value) {
        const frontElement = document.getElementById(frontId);
        const backElement = document.getElementById(backId);

        frontElement.innerText = formatTime(value);
        backElement.innerText = formatTime(value);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

