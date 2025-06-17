document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading
    setTimeout(() => {
        document.querySelector('.cyber-loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.cyber-loader').style.display = 'none';
        }, 500);
    }, 1000);
    
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.cyber-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section') + '-section';
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Count up animation for stats
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(value => {
        const target = parseInt(value.getAttribute('data-count'));
        const duration = 1500;
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(counter);
                current = target;
            }
            value.textContent = Math.floor(current);
        }, 16);
    });
    
    // Category filtering for docs
    const categoryCards = document.querySelectorAll('.category-card');
    const docItems = document.querySelectorAll('.doc-item');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active category
            categoryCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Filter docs
            docItems.forEach(doc => {
                if (category === 'all' || doc.getAttribute('data-category') === category) {
                    doc.style.display = 'flex';
                } else {
                    doc.style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const supportForm = document.querySelector('.support-form form');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
            this.reset();
        });
    }
});