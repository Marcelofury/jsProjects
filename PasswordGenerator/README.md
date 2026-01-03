# Password Generator

A simple JavaScript password generator that creates secure, customizable passwords.

## Features

- Generate passwords of custom length
- Include/exclude lowercase letters (a-z)
- Include/exclude uppercase letters (A-Z)
- Include/exclude numbers (0-9)
- Include/exclude special symbols (@#$%^&*()_+!~)

## Usage

```javascript
const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `length` | number | The desired length of the password |
| `includeLowercase` | boolean | Include lowercase letters |
| `includeUppercase` | boolean | Include uppercase letters |
| `includeNumbers` | boolean | Include numeric digits |
| `includeSymbols` | boolean | Include special characters |

### Example

```javascript
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
```

## Running the Script

```bash
node script.js
```

## License

MIT
