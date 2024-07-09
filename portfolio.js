document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Modal functionality
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-description");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.view-project').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            let projectDescription = '';

            switch (projectId) {
                case '1':
                    projectDescription = 'Detailed description of Project One.';
                    break;
                case '2':
                    projectDescription = 'Detailed description of Project Two.';
                    break;
                default:
                    projectDescription = 'No project details available.';
            }

            modalContent.textContent = projectDescription;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});

