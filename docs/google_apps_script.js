function doPost(e) {
  var sheet = SpreadsheetApp.openById("1i5z53I_xuVTzskPDHQudlmTAXNmjMz4v3WlNVuo8x-8").getActiveSheet();
  var name = e.parameter.name;
  var email = e.parameter.email;
  var message = e.parameter.message;
  var timestamp = new Date();

  sheet.appendRow([timestamp, name, email, message]);

  MailApp.sendEmail({
    to: "ocalaoshi@gmail.com",
    subject: "新反馈表单提交",
    htmlBody: "<b>姓名:</b> " + name + "<br><b>邮箱:</b> " + email + "<br><b>内容:</b> " + message
  });

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}