const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    //get the size of the screen
	const mainScreen = require('electron').screen.getPrimaryDisplay();
    //create a window
  mainWindow = new BrowserWindow({
    //with the size of the screen
	width: mainScreen.size.width,
	height: mainScreen.size.height,
   
  //hide the menu 
 //   autoHideMenuBar :true,
	transparent: true,
    //show the  (menu and minimize/close button) of the window
	frame: true,
    //put the window on the top  
	alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      //allow access resources within renderer
      nodeIntegration: true,
      //allow to run code in preload scripts
      contextIsolation: false,
    },
  });
  //mainWindow.setIgnoreMouseEvents(true, { forward: true });
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:8080'); // Serve the React app
  //open the dev tabs 
  mainWindow.webContents.openDevTools();
}


//when the app is ready , create window
app.whenReady().then(createWindow);
//if all windows are closed then quit
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
//if activate but nothing open then create window
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
