// 16: How do you check if a string contains only digits?


const onlyDigits = string => [...string].every(c => '0123456789'.includes(c));

