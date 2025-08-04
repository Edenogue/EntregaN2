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

  // Image hover preview
  $('img.previewable-img').hover(
    function (e) {
      const src = $(this).attr('src');
      const preview = $('<div class="image-hover-preview"><img src="' + src + '" alt="preview"></div>');
      $('body').append(preview);
      preview.css({ top: e.pageY + 10, left: e.pageX + 10 });
    },
    function () {
      $('.image-hover-preview').remove();
    }
  );

  $('img.previewable-img').mousemove(function (e) {
    $('.image-hover-preview').css({ top: e.pageY + 10, left: e.pageX + 10 });
  });

  updateNav();
});
