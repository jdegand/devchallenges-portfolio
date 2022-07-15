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


  const one_day = 1000 * 60 * 60 * 24
  
  // To set present_dates to two variables
  const present_date = new Date();
  
  const started = new Date(2019, 11, 4)
  
  // To Calculate the result in milliseconds and then converting into days
  const Result = Math.round(present_date.getTime()-started.getTime()) / (one_day);
  
  // To remove the decimals from the (Result) resulting days value
  const Final_Result = Result.toFixed(0);

  document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('days').textContent = Final_Result;
  })


})();