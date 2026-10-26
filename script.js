'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let statusTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(statusTimer);
  try {
    await navigator.clipboard.writeText('notmyvegetable@gmail.com');
    copyStatus.textContent = 'Email copied.';
  } catch {
    copyStatus.textContent = 'Please select the email address above to copy it.';
  }
  statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 5000);
});

const repoCards = [...document.querySelectorAll('.repo-card')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const searchInput = document.getElementById('repo-search');
let activeFilter = 'all';
function filterRepositories() {
  const query = searchInput.value.trim().toLowerCase();
  let count = 0;
  repoCards.forEach(card => {
    const visible = (activeFilter === 'all' || card.dataset.kind === activeFilter) && card.dataset.search.includes(query);
    card.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('repo-count').textContent = `Showing ${count} ${count === 1 ? 'repository' : 'repositories'}`;
  document.getElementById('repo-empty').hidden = count !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  filterRepositories();
}));
searchInput.addEventListener('input', filterRepositories);
const snapshotDialog = document.getElementById('snapshot-dialog');
const snapshotImage = document.getElementById('snapshot-image');
document.querySelectorAll('[data-snapshot]').forEach(button => button.addEventListener('click', () => {
  snapshotImage.src = button.dataset.snapshot;
  snapshotImage.alt = button.dataset.caption;
  document.getElementById('snapshot-caption').textContent = button.dataset.caption;
  snapshotDialog.showModal();
}));
document.getElementById('close-snapshot').addEventListener('click', () => snapshotDialog.close());
snapshotDialog.addEventListener('click', event => { if (event.target === snapshotDialog) snapshotDialog.close(); });
