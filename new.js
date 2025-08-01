(function () {
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const birthday = "AUG 09, 2025 00:00:00";
    const countdownTime = new Date(birthday).getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownTime - now;

        if (distance < 0) {
            document.getElementById("headline").innerText = "Happy Birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
            return;
        }

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    }, 1000);
})();
