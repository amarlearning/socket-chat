var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

// As soon as the app gets ready, plz create a window for user :P
app.on('ready', function() {

  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  // Also load some content, nobody wants to see plain window.
  mainWindow.loadURL('file://' + __dirname + '/index.html')

})

// terminate the application, when all windows are closed!
app.on('window-all-closed', () => {
  app.quit()
})