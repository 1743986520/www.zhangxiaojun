document.querySelectorAll('.contact').forEach(item => {
  item.addEventListener('click', () => {
    const text = item.getAttribute('data-copy');
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('toast');
      toast.textContent = '已複製：' + text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    });
  });
});