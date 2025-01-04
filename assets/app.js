function updateDateTime() {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('date').textContent = formattedDate;
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
    document.getElementById('time').textContent = formattedTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);