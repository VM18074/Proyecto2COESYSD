/*const Send_Email = () => {

    let formData = new FormData();

    const to = $('#email').val();
    const name = $('#name').val();
    const attachmentlist = $('#email_attachments').get(0).dropzone;
    const file = attachmentlist.files;

    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
    }

    const emailobject = {
        email: to,
        names: name,
    }

    formData.append('emailobject', JSON.stringify(emailobject));
    $.ajax({
        url: '/sendemail',
        type: 'POST',
        datatype: 'json',
        processData: false,
        contentType: false,
        data: formData,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error.message);
        }
    })
}*/