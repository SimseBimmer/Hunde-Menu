// menu
function openNavPush() {
    document.getElementById("sideMenu").classList.add("opened");
    document.getElementById("mainContent").classList.add("opened");
}

function closeNavPush() {
    document.getElementById("sideMenu").classList.remove("opened");
    document.getElementById("mainContent").classList.remove("opened");
}


// popUp/overlay
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');

    function showPopup() {
        popup.style.transition = 'opacity 0.4s';
        popup.style.opacity = '1';
        overlay.style.display = 'block'; 
        document.body.style.overflow = 'hidden';
    }

    function hidePopup() {
        popup.style.transition = 'opacity 0.4s';
        popup.style.opacity = '0';
        overlay.style.display = 'none'; 
        document.body.style.overflow = 'auto';
    }

    document.getElementById('allow-all').addEventListener('click', function() {
        hidePopup();
    });

    document.getElementById('allow-necessary').addEventListener('click', function() {
        hidePopup();
    });

    document.getElementById('none').addEventListener('click', function() {
        window.location.href = 'https://en.wikipedia.org/wiki/Cookie_Monster';
    });

    showPopup();
});

