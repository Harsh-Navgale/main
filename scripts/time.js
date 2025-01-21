const targetDate = new Date('2025-03-20T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days}d`;
    document.getElementById('hours').textContent = `${hours}h`;
    document.getElementById('minutes').textContent = `${minutes}m`;
    document.getElementById('seconds').textContent = `${seconds}s`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
