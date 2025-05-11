function saveAnimationPreference(enabled) {
  localStorage.setItem('animationEnabled', enabled);
}

function getAnimationPreference() {
  const preference = localStorage.getItem('animationEnabled');
  
  return preference === null ? true : JSON.parse(preference);
}
