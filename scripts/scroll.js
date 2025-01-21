// not in use

document.addEventListener("DOMContentLoaded", function() {
    const eventInfos1 = document.querySelectorAll(".event-info2");
    const eventInfos2 = document.querySelectorAll(".event-info");
    const eventInfos3 = document.querySelectorAll(".c4_2");
  
    function checkVisibility() {
        eventInfos1.forEach(eventInfo => {
            const rect = eventInfo.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                eventInfo.classList.add("show");
            }
        });
        eventInfos2.forEach(eventInfo => {
            const rect = eventInfo.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                eventInfo.classList.add("show");
            }
        });
        eventInfos3.forEach(eventInfo => {
            const rect = eventInfo.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                eventInfo.classList.add("show");
            }
        });
    }
  
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check once when page loads
  });