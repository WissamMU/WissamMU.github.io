import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "./css/style.css";
import '@fortawesome/fontawesome-free/js/all.min.js';
import "./sass/styles.scss";


import emailjs from 'emailjs-com';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    emailjs.send(
      process.env.YOUR_SERVICE_ID,  
      process.env.YOUR_TEMPLATE_ID,  
      formData,
      process.env.YOUR_USER_ID   
    )
    .then(() => {
      alert("تم إرسال الرسالة بنجاح ✅");
      form.reset();
    })
    .catch((error) => {
      console.error("فشل الإرسال", error);
      alert("حدث خطأ أثناء الإرسال ❌");
    });
  });
});
