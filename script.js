//   مراقبة  عدد الاحرف في حقل النص
const textarea = document.querySelector('textarea');
const counterDisplay = document.querySelector('#counter');
const maxLength = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    counterDisplay.textContent = `${currentLength} / ${maxLength}`;
});
