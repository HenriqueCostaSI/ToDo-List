"use strict";
alert("Hello World");

document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.querySelector('button[type="toggleMode"]');
    const body = document.body;

    // Check localStorage for existing theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Set initial button text
    toggleModeButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

    // Toggle dark mode function
    toggleModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update button text
        toggleModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
});