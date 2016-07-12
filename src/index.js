import {isObject, isError} from 'stc-helper';
import colors from 'colors';

colors.enabled = true;

/**
 * stc logger class
 */
export default class StcLog {
  /**
   * constructor
   */
  constructor(){
    this.hasError = false;
    this.hasLog = false;
  }
  /**
   * add error log
   */
  error(message){
    this.hasError = true;
    this.display(message, 'error');
  }
  /**
   * add warning log
   */
  warning(message){
    this.display(message, 'warning');
  }
  /**
   * add notice log
   */
  notice(message){
    this.display(message, 'notice');
  }
  /**
   * display item log
   */
  display(message, type){
    this.hasLog = true;
    if(message && isObject(message) && 'message' in message){
      let str = '';
      if(message.className){
        str = `${message.className}: ${message.message};`
      }else{
        str = message.message;
      }
      if(message.file){
        str += ` in file \`${message.file}\``;
      }
      if(message.line !== undefined){
        str += ` on line: ${message.line + 1}, column: ${message.column + 1}`;
      }
      message = str;
    }
    switch(type){
      case 'error':
        message = colors.red(message);
        break;
      case 'warning':
        message = colors.yellow(message);
        break;
      default:
        message = colors.green(message);
    }
    console.log(message);
  }
}