    // Скрипт для закрытия панели при клике вне её на мобильных
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (sidebar && !sidebar.contains(event.target) && menuBtn && !menuBtn.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
		// Автоматическая подсветка активного пункта меню
	    function setActiveNavItem() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        const navLinks = document.querySelectorAll('.sidebar-nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentFile) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });
    }
    
    setActiveNavItem();
	
