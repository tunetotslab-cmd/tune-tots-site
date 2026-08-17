/*
  TUNE TOTS — EDITABLE CONTENT
  Основной текст сайта находится в index.html, чтобы его можно было менять
  прямо через GitHub. Этот файл оставлен как место для будущих интерактивных
  функций и интеграций (форма записи, оплата, CMS и т.д.).
*/

const manifestoNote = document.querySelector('.manifesto-note');
if (manifestoNote) manifestoNote.remove();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    // Место для будущей аналитики / интерактивов.
  });
});
