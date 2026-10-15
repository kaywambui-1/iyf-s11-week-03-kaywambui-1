// One single source of truth for the footer's HTML.
const footerHTML = `
    <footer>
        <p>Connect with me:</p>
        <a href="https://www.linkedin.com/in/christine-kay-wambui-6a0660277" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
`;

// Find the placeholder div on whichever page this runs on,
// and inject the footer's HTML into it.
document.getElementById("footer-placeholder").innerHTML = footerHTML;