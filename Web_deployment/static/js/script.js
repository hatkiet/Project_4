document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://proj4-0334480f0ba8.herokuapp.com//predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').textContent = 'Heart Attack Risk: ' + (result.result === 1 ? 'High' : 'Low');
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred. Please try again.';
    });
});

function openPage(pageName, elmnt) {
    // Hide all tabcontent elements
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablink elements
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    elmnt.classList.add("active");

    // Initialize the map if switching to the "Map" tab
    if (pageName === 'Map') {
        if (!window.mapInitialized) {
            initializeMap();
            window.mapInitialized = true;
        }
    }
}

// Function to initialize the map
function initializeMap() {
    let myMap = L.map("map", {
        center: [38.8206673, -122.8141632],
        zoom: 3.5
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    L.marker([38.8206673, -122.8141632]).addTo(myMap)
        .bindPopup('This is a test marker')
        .openPopup();
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



