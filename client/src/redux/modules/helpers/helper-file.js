
import { formJson } from './helper-data'

const fileHelper = {

  saveConfigTest: (dataObj) => {

    const btnElement = document.getElementById("saveButton");
    
    const fileName = 'config.json';
    
    let blob = new Blob([JSON.stringify(dataObj, 0,2)], {type : 'text/json;charset=utf-8'});
    
    btnElement.href = URL.createObjectURL(blob);
    
    btnElement.download = fileName
    // return link
    // console.log('will save in '+fileName, data);
  },

  saveConfig: (dataObj) => {
    this.saveConfigTest(dataObj);
    // Replace here by Alex solution
  },

  resetConfig: () => {
    console.log(formJson)
    return formJson
  },

  testConfig: (dataObj) => {
    
    // test if data is an object
    if(!(dataObj instanceof Object)) {
      console.warn('It is not an Object');
      return false;
    } else {
      console.log('dataObj is valid')
    }

    var data = JSON.stringify(dataObj)
    // test dataObj is an valid json object
    if (typeof(data) !== 'string') {
      console.warn('Data is not in a valid format')
    }
    try {
        JSON.parse(data);
        console.log('Valid JSON')
    } catch (e) {
        console.warn('Invalid JSON')
    }
    
    // test dataObj has a form name
    if (!dataObj.hasOwnProperty('forms')) {
      console.warn('Expected "forms" but got ', Object.keys(dataObj)[0])
      return
    } else {
      for (var i = 0; i < Object.keys(dataObj.forms).length; i++) {

        var form = Object.keys(dataObj.forms)[i]

        console.log('Form: ', form)
        console.log(dataObj.forms[form])
      
        Object.keys(dataObj.forms)
        if(!dataObj.forms[form].hasOwnProperty('header')) {
          console.warn('Expected "header" inside ' + form + ' form object')
        }
        if(!dataObj.forms[form].header.hasOwnProperty('width')) {
          console.warn('Expected "width" inside ' + form + ' form object')
        }
        if(!dataObj.forms[form].header.hasOwnProperty('bgImage')) {
          console.warn('Expected "bgImage" inside ' + form + ' form object')
        }
        if(!dataObj.forms[form].header.width.includes('px')) {
          console.warn('Expected width to be in px for ' + form + ' form object')
        }
        if(!dataObj.forms[form].header.width.includes('800')) {
          console.warn('Expected width of header to be 800px ' + form + ' form object')
        }
        debugger
        // check for copies of form
        var copies = Object.keys(dataObj.forms[form])
        var index = copies.indexOf('header')

        if (index > -1) {
          copies.splice(index, 1)
        }
        
        if(copies.length > 0) {
          for(var j=0; j < copies.length; j++) {
            var copy = parseInt(copies[j])
            if (copy === NaN) {
              console.warn('Expected copies to be a numerical value for ' + form + ' form object') 
            }            
            
            var pages = Object.keys(dataObj.forms[form][copy])
            for(var x=0; x < pages.length; x++) {
              var page = parseInt(pages[j])
              if (page === NaN) {
                console.warn('Expected pages to be a numerical value for ' + form + ' form object') 
              }                  
              console.log(form + ' copy: ' + copy + ' pages:', pages.length)
            }
          }

        if (copies.length <= 1) {console.log(copy + ' copy of ' + form)}
          else {console.log(copy + ' copies of ' + form)}
        }

      // check input field object structure is correct

        
        for (var key in dataObj.forms[form]) {
          var obj = dataObj.forms[form][key];
          let inputKeys = ['defaultValue', 'top', 'left', 'width', 'height']

          for(var prop in dataObj.forms[form]) {
            for(var k = 0; k < inputKeys.length; k++) {
              if (!obj.hasOwnProperty(inputKeys[k])){
                console.log(key, 'is missing', inputKeys[k])
              }
             }
          }

          // if (!obj.hasOwnProperty('top')){
          //   console.log(key, 'is missing')
          // }
          // if (!obj.hasOwnProperty('left')){
          //   console.log(key, 'is missing')
          // }
          // if (!obj.hasOwnProperty('width')){
          //   console.log(key, 'is missing')
          // }
          // if (!obj.hasOwnProperty('height')){
          //   console.log(key, 'is missing')
          // }
        }

      }
    }

/*
for (var key in veh) {
  var obj = veh[key]
  if(!obj.hasOwnProperty('size')){
    console.log(key, ' doesnt have size')
  }
  
  
}
*/
    
    // test inside form name it has a header
        // test it has width
        // test it has px
        // test it has bgImage
        // test the files an extension of png, jpg, img

    // test there is a copy number

    // test there is a page number

    // test the field names
      // test it has : {
        //   "defaultValue": "John Doe",
        //   "top": "310px",
        //   "left": "80px",
        //   "width": "200px",
        //   "height": "13px"
        // },
    // dataObj type

    // let data = dataObj.forms.ex_w8[1][1]
    // for (let key in data) {
      
    //   let items = data[key];
      
    //   for(let k in items) {
    //     if(k == 'mandatory') {
    //       console.log(k, key)
    //     }
    //   }
    // }
  }
}

export default fileHelper;