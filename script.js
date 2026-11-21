/* ===== Kiểm tra ảnh ===== */
document.querySelectorAll('.photo img').forEach(function (img) {
  function empty() {
    img.parentNode.classList.add('empty');
  }

  img.addEventListener('error', empty);

  if (img.complete && img.naturalWidth === 0) {
    empty();
  }
});

/* ===== Biểu mẫu liên hệ ===== */
var contactForm = document.getElementById('f');

if (contactForm) {
  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

    var n = document.getElementById('n').value;
    var e = document.getElementById('e').value;
    var m = document.getElementById('m').value;

    var body = encodeURIComponent(m + '\n\n– ' + n + ' (' + e + ')');

    window.location.href =
      'mailto:theanh25112007@gmail.com?subject=' +
      encodeURIComponent('Liên hệ từ portfolio') +
      '&body=' + body;
  });
}
