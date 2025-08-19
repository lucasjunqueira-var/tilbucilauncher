module.exports = {
  packagerConfig: {
    asar: false, 
    icon: 'images/tilbuciIcon'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'TilBuci'
      }
    }, 
    {
      "name": "@electron-forge/maker-dmg",
      "config": {
        "format": "ULFO"
      }
    },
    {
      name: '@electron-forge/maker-deb',
        config: {
          options: {
            icon: 'images/tilbuciIcon.png'
          }
      }
    }
  ]
};
