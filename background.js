// background.js


let color = '#fc5200';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({color});
	console.log('Default background color set to orange', `color: ${color}`);
});