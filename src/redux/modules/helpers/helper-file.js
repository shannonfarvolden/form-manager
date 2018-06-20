
import { formJson } from './helper-data'

const fileHelper = {

  saveConfigTest: (dataObj) => {

    const btnElement = document.getElementById("saveButton");
    
    const data = JSON.stringify(dataObj);
    
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
  }
}

export default fileHelper;