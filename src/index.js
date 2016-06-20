import {isObject} from 'stc-helper';
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
    this.errors = [];
    this.warnings = [];
    this.notices = [];
  }
  /**
   * has error log
   */
  hasError(){
    return this.errors.length > 0;
  }
  /**
   * add error log
   */
  error(message, file, line, column){
    this.errors.push({
      message,
      line,
      column,
      file
    });
    return this;
  }
  /**
   * add warning log
   */
  warning(message, file, line, column){
    this.warnings.push({
      message,
      line,
      column,
      file
    });
    return this;
  }
  /**
   * add notice log
   */
  notice(message, file, line, column){
    this.notices.push({
      message,
      line,
      column,
      file
    });
    return this;
  }
  /**
   * display log
   */
  display(opts = {
    error: true,
    warning: true,
    notice: true
  }){
    if(opts.error){
      this.errors.forEach(item => this.displayLog(item, 'error'));
    }
    if(opts.warning){
      this.warnings.forEach(item => this.displayLog(item, 'warning'));
    }
    if(opts.notice){
      this.notices.forEach(item => this.displayLog(item, 'notice'));
    }
  }
  /**
   * display item log
   */
  displayLog(message, type){
    if(isObject(message)){
      if(message.file){
        message += ` in file \`${message.file}\``;
      }
      if('line' in message){
        message += ` on line: ${message.line}, column: ${message.column}`;
      }
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