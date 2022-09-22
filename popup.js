// Initialize button
let btnKudosAll = document.getElementById("kudosAll");

// When the button is clicked, inject kudosAll into current page
btnKudosAll.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: kudosAll,
  });
});


// The body of this function will be executed as a content script inside the
// current page
function kudosAll() {
	document.body.style.backgroundColor = '#fc5200';
	var buttons = document.querySelectorAll("[data-testid='unfilled_kudos']"); 
	for(var i = 0; i <= buttons.length; i++) buttons[i].parentElement.click();
}

