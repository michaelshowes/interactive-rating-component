// Logs selected radio button value and changes state on submit
function submitRating() {
  const rating = document.querySelectorAll('input[type=radio]');
  rating.forEach(item => {
    if (item.checked) {
      const rate = document.getElementById('rate');
      rate.innerHTML = `You selected ${item.value} out of 5`;
      const ratingState = document.getElementById('ratingState');
      const thankYouState = document.getElementById('thankYouState');
      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
    };
  });
};