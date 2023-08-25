function toggleNav() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
  
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }
  