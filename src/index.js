const { app, BrowserWindow } = require('electron');
const path  = require('path');
const url = require('url');
let win;

const createWindow = () => {
    //create browser window
    win = new BrowserWindow({ width: 800, height: 800 });

    //Load index.html
        win.loadURL('http://localhost:3000/');

    //Open dev tools
    win.webContents.openDevTools();

    //On windows close
    win.on('closed',()=>{
        win = null;
    })
}

app.on('ready', createWindow);
//Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});