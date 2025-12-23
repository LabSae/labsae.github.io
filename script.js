const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Show corresponding content
    const target = tab.getAttribute('data-tab');
    contents.forEach(content => {
      content.classList.remove('active');
      if(content.id === target){
        content.classList.add('active');
      }
    });
  });
});
