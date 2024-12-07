document.getElementById('translationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    const fileInput = document.getElementById('file').files[0];

    console.log('Details submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Source Language:', sourceLanguage);
    console.log('Target Language:', targetLanguage);

    if (fileInput) {
        console.log('File uploaded:', fileInput.name);
    }

    alert('הפרטים נשלחו בהצלחה! נשלח מייל בהמשך.');
});
