function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('GAS React App')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getMessage() {
  return "サーバー処理実行"; 
}