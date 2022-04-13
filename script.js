(function(){
  const filters = document.querySelectorAll('.filter');

  const all = document.getElementById('all');

  all.classList.add('active');

  filters.forEach(filter => { 

    filter.addEventListener('click', function(e) {

      filters.forEach(filter => filter.classList.remove('active'));
      e.currentTarget.classList.add('active');

      let selectedFilter = filter.getAttribute('data-filter');
      let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
      let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

      if (selectedFilter == 'all') {
        itemsToHide = [];
        itemsToShow = document.querySelectorAll('.projects [data-filter]');
      }

      itemsToHide.forEach(el => {
        el.classList.add('hide');
        el.classList.remove('show');
      });

      itemsToShow.forEach(el => {
        el.classList.remove('hide');
        el.classList.add('show'); 
      });

    });
  });
})();