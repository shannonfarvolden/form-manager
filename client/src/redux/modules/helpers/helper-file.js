
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
    const data = {...formJson};
    console.log('in helper config=', data)
    return data
  },

  testConfig: (dataObj) => {
    debugger
    let data = dataObj.forms.ex_w8[1][1]
    for (let key in data) {
      
      let items = data[key];
      
      for(let k in items) {
        if(k == 'mandatory') {
          console.log(k, key)
        }
      }
    }
  }
}

export default fileHelper;