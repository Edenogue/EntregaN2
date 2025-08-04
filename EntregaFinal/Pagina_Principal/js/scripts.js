$(document).ready(function () {
  function updateNav() {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      $('#loginNav').hide();
      $('#perfilDropdown').show();
    } else {
      $('#loginNav').show();
      $('#perfilDropdown').hide();
    }
  }

  $('#loginBtn').on('click', function () {
    localStorage.setItem('loggedIn', 'true');
    $('#loginModal').modal('hide');
    updateNav();
  });

  $('#logoutBtn').on('click', function () {
    localStorage.removeItem('loggedIn');
    updateNav();
  });

  $('header img').hover(
    function () {
      $(this).addClass('logo-glow');
    },
    function () {
      $(this).removeClass('logo-glow');
    }
  );

  updateNav();
});
