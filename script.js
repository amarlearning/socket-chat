// -*- coding: utf-8 -*-
// @Author: Amar Prakash Pandey
// @Date:   2016-05-26
// @Email:  amar.om1994@gmail.com  
// @Github username: @amarlearning
// @Last Modified by: Amar Prakash Pandey  
// @Last Modified date: 2016-05-28
// MIT License. You can find a copy of the License
// @http://amarlearning.mit-license.org


var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

// As soon as the app gets ready, plz create a window for user :P
app.on('ready', function() {

  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    darkTheme: true
  })

  // Also load some content, nobody wants to see plain window.
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.show()
})


// terminate the application, when all windows are closed!
app.on('window-all-closed', () => {
  app.quit()
})