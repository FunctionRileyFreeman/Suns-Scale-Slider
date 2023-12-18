const sizeSlider = document.getElementById('sizeSlider');
const earthCount = document.getElementById('earthCount');
const comparisonImage = document.getElementById('comparisonImage');

sizeSlider.addEventListener('input', () => {
  const scaleFactor = sizeSlider.value;
  const earthsAcrossSun = scaleFactor * 100; // 109 is the approximate size ratio

  earthCount.textContent = `${scaleFactor} Earth${scaleFactor > 1 ? 's' : ''}`;
  comparisonImage.style.width = `${earthsAcrossSun}%`; // Adjust the width based on the accurate scale
});
