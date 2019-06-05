const electron = require('electron')
const app = electron.app
let mainWindow

app.on('ready', () => {
  if (!mainWindow) {
    createMainWindow()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    createMainWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function createMainWindow () {
  mainWindow = new electron.BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true
  })
  mainWindow.loadFile('./src/index.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
