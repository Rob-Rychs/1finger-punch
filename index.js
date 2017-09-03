const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    icon: path.join(__dirname, './icons/png/64x64.png')
    // titleBarStyle: 'hidden-inset',
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();

    mainWindow.webContents.send('open-file', url);
  })
})