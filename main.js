
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileName = document.getElementById('profile-name');

editProfileBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    
    if (profileName.innerText === "Jane Doe") {
        profileName.innerText = "Bara Salah";
    } else {
        profileName.innerText = "Jane Doe";
    }
});



function handleRequest(element, isAccepted) {
    const requestsCountElement = document.getElementById('requests-count');
    const connectionsCountElement = document.getElementById('connections-count');
    
    
    let currentRequests = parseInt(requestsCountElement.innerText);
    let currentConnections = parseInt(connectionsCountElement.innerText);
    
    
    if (currentRequests > 0) {
        requestsCountElement.innerText = currentRequests - 1;
    }
    
    
    if (isAccepted) {
        connectionsCountElement.innerText = currentConnections + 1;
    }
    
    
    const listItem = element.closest('.list-item');
    listItem.remove();
}
