document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const clickButton = document.getElementById('actionButton');
    const outputDiv = document.getElementById('output');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // --- Existing Feature Logic ---
    clickButton.addEventListener('click', () => {
        const timestamp = new Date().toLocaleTimeString();
        outputDiv.textContent = `Button clicked at ${timestamp}.`;
    });

    // --- Dark Mode Logic ---

    // Function to set the theme
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = 'Light Mode';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = 'Dark Mode';
        }
    };

    // 1. Check local storage preference on load
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        setTheme(storedTheme === 'dark');
    } else {
        // 2. Check OS preference if no stored preference exists
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    // 3. Add toggle listener
    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        setTheme(!isCurrentlyDark);
    });
});
<!-- updated: 2025-10-21T18:31:48.383818 -->