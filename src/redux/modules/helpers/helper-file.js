
import { formJson } from './helper-data'

const fileHelper = {

  saveConfigTest: (dataObj) => {
    const path = 'c:/test.json';
    const data = JSON.stringify(dataObj);
    console.log('will save in '+path, data);
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