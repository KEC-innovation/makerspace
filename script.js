// Simple client-side search filter for resource items
(function(){
  const q = document.getElementById('search');
  const items = Array.from(document.querySelectorAll('.resource-item'));

  function normalize(s){ return (s||'').toLowerCase(); }

  function filter(){
    const needle = normalize(q.value);
    items.forEach(el => {
      const text = normalize(el.textContent);
      const tags = normalize(el.getAttribute('data-tags'));
      const show = !needle || text.includes(needle) || tags.includes(needle);
      el.classList.toggle('hidden', !show);
    });
  }

  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  q.addEventListener('input', filter);
  // initial filter in case query pre-filled by browser
  filter();
})();
