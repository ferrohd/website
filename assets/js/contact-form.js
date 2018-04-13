$(function(){
  $("#form_send_message").on("click", function(){
    var formName = $('#form_name').val();
    var formEmail = $('#form_email').val();
    var formSubject = $('#form_subject').val();
    var formMessage = $('#form_message').val();
    var formListserve = $('#form_listserve:checked').val();

    var formData = {
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
      form: "contact form about page", // use this to filter in Zapier
      listserve: formListserve ? true : false,
    };

    // Submit Contact Form on AboutUS
    bowtie.user.profile(profileData, function(){
      alert("Thank you for contacting us.  We will be in touch shortly.");
    });
    return false;
  });
});