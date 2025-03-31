document.getElementById('translationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    const fileInput = document.getElementById('file').files[0];

    console.log('Details submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('phone:', phone);
    console.log('Source Language:', sourceLanguage);
    console.log('Target Language:', targetLanguage);

    if (fileInput) {
        console.log('File uploaded:', fileInput.name);
    }

});

//for animation : 
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', function () {
    submitButton.classList.add('clicked');
    setTimeout(() => {
        submitButton.classList.remove('clicked');
    }, 300);
});

//for the popup : 
/*document.getElementById('translationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    const fileInput = document.getElementById('file').files[0];

    if (!name || !email || !sourceLanguage || !targetLanguage || !fileInput) {
        alert("אנא מלא את כל השדות");
        return;
    }

    // פתח את הפופאפ
    document.getElementById('popupOverlay').style.display = 'flex';
});
*/

  
  document.getElementById("translationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = document.getElementById("translationForm");
  
    // נוודא שהקובץ הועלה והקישור נוצר
    const fileWidget = uploadcare.Widget('[role=uploadcare-uploader]');
    const fileInput = form.querySelector('input[name="file"]');
  
    fileWidget.value().promise().then(function (fileInfo) {
      // שמים את הקישור לשדה input בטופס (כך EmailJS יקבל אותו)
      fileInput.value = fileInfo.cdnUrl;
  
      // שולחים את הטופס עם הקישור
      emailjs.sendForm("service_n022myf", "template_thz9the", form)
        .then(function () {
          document.getElementById("popupOverlay").style.display = "flex";
          form.reset();
        }, function (error) {
          alert("שליחת המייל נכשלה: " + error.text);
        });
    });
  });
  
  // סגירת הפופ-אפ
  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }
  
 
  
// פונקציית סגירה
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}
