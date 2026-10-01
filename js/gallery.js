// Gallery filter: shows work for one curl type at a time.
document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const shots = document.querySelectorAll('.shot[data-type]');
  const status = document.getElementById('gallery-status');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;

      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));

      let shown = 0;
      shots.forEach((shot) => {
        const match = filter === 'all' || shot.dataset.type === filter;
        shot.hidden = !match;
        if (match) shown += 1;
      });

      if (status) {
        status.textContent = filter === 'all'
          ? `Showing all ${shown} photos`
          : `Showing ${shown} photos of ${filter} hair`;
      }
    });
  });
});
