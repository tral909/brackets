module.exports = function check(str, bracketsConfig) {
        let stack = [];
        for (let j = 0; j < str.length; j++) {
            for (let i = 0; i < bracketsConfig.length; i++) {
                if (bracketsConfig[i][0] == str[j]) {
                    stack.push(str[j]);
                }
                if (bracketsConfig[i][1] == str[j] && !(bracketsConfig[i][0] == stack.pop())) {
                    return false;
                }
            }
        }
        return stack.length == 0;
    }
