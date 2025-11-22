// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Set initial active page
    setActivePage('home');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            setActivePage(pageId);
        });
    });
    
    function setActivePage(pageId) {
        // Remove active class from all links and pages
        navLinks.forEach(link => link.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        
        // Add active class to current link and page
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        const activePage = document.getElementById(pageId);
        
        if (activeLink && activePage) {
            activeLink.classList.add('active');
            activePage.classList.add('active');
        }
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // Here you would typically make an API call or filter content
        }
    }
    
    // Auth buttons functionality
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    
    loginBtn.addEventListener('click', function() {
        alert('Login functionality would go here');
    });
    
    signupBtn.addEventListener('click', function() {
        alert('Sign up functionality would go here');
    });
});