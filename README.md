# @uncrypt/simple-aes

[![npm](https://img.shields.io/npm/v/@uncrypt/simple-aes?style=for-the-badge&labelColor=222)](https://www.npmjs.com/package/@uncrypt/simple-aes)
![node](https://img.shields.io/static/v1?label=Node&message=16.16%2b&logo=node.js&style=for-the-badge&labelColor=444&color=informational)
[![bundles](https://img.shields.io/static/v1?label=&message=esm&logo=webpack&style=for-the-badge&labelColor=444&color=informational)](https://github.com/belgattitude/uncrypt/blob/main/packages/simple-aes/.size-limit.cjs)
[![codecov](https://img.shields.io/codecov/c/github/belgattitude/uncrypt?logo=codecov&style=for-the-badge&labelColor=444)](https://codecov.io/gh/belgattitude/uncrypt)
[![techdebt](https://img.shields.io/codeclimate/tech-debt/belgattitude/uncrypt?label=TechDebt&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/uncrypt)
[![maintainability](https://img.shields.io/codeclimate/maintainability/belgattitude/uncrypt?label=Maintainability&logo=code-climate&style=for-the-badge&labelColor=444)](https://codeclimate.com/github/belgattitude/uncrypt)
[![npm](https://img.shields.io/npm/dt/@uncrypt/simple-aes?style=for-the-badge)](https://www.npmjs.com/package/@uncrypt/simple-aes)
[![license](https://img.shields.io/npm/l/@uncrypt/simple-aes?style=for-the-badge&labelColor=000000)](https://github.com/belgattitude/uncrypt/blob/main/LICENSE)

## Install

```bash
npm install @uncrypt/simple-aes  # via npm
yarn add @uncrypt/simple-aes     # via yarn
pnpm add @uncrypt/simple-aes     # via pnpm
```

## Usage

```typescript
import {
  AesCbcEncryptor,
  DecryptError,
  WeakPasswordError,
} from "@uncrypt/simple-aes";

const key = "long-enough-secret-encryption-key";

const data = "something-utf8-é😀";

const aesCrypt = new AesCbcEncryptor(key); // will throw WeakPasswordError if too short

const crypted = aesCrypt.encrypt(data);

aesCrypt.decrypt(crypted); // will throw Decrypt error if iv not valid or wrong key
```

## Support

Don't hesitate and open [an issue](https://github.com/belgattitude/uncrypt/issues).

## Contributors

Contributions are warmly appreciated. Have a look to the [CONTRIBUTING](https://github.com/belgattitude/uncrypt/blob/main/CONTRIBUTING.md) document.

## Sponsors ♥

If you are enjoying some of my OSS guides or libs for your company, I'd really appreciate a [sponsorship](https://github.com/sponsors/belgattitude), a [coffee](https://ko-fi.com/belgattitude) or a dropped star. That gives me a tasty morning boost and help me to make some of my ideas come true 🙏

## License

MIT
