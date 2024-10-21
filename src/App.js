import { Console } from '@woowacourse/mission-utils';
import { checkLine, checkCustomPart, checkLinePart } from './utils/stringValidator.js';
import {
  checkIsNormal,
  sumString,
  divideCustom,
  addCustomSeparator,
} from './utils/main.js';
import { DEFAULT_SEPARATORS } from './constants.js';

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    checkLine(line);
    
    if (checkIsNormal(line)) return Console.print(`결과 : ${sumString(line, separators)}`);

    const [customPart, linePart] = divideCustom(line);
    checkCustomPart(customPart);

    addCustomSeparator(separators, customPart)
    checkLinePart(linePart, separators);

    return Console.print(`결과 : ${sumString(linePart, separators)}`);
  }
}

export default App;
