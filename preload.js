const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openfolder: async (folder) => {
	  try {
		return await ipcRenderer.invoke('open-folder', folder);
	  } catch (err) {
		return `Error: ${err}`;
	  }
  }, 
  openbrowser: (url) => {
	ipcRenderer.invoke('open-browser', url);
  }, 
  openwindow: (url) => {
	ipcRenderer.invoke('open-window', url);
  }, 
  close: () => {
	ipcRenderer.invoke('close');
  }
});
