function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Minimal Web App')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
