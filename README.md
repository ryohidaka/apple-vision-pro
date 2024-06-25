# apple-vision-pro

[![npm version](https://badge.fury.io/js/apple-vision-pro.svg)](https://badge.fury.io/js/apple-vision-pro)
![build](https://github.com/ryohidaka/apple-vision-pro/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/apple-vision-pro/graph/badge.svg?token=RHP9TB2F51)](https://codecov.io/gh/ryohidaka/apple-vision-pro)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Identifying "Apple Vision Pro" from UserAgent

## Notes

This is only a tentative detection method and is subject to change in the future.

## Installation

You can install this library using npm:

```shell
npm install apple-vision-pro
```

## Usage

```ts
import { isAppleVisionPro } from "apple-vision-pro";

const isAVP = isAppleVisionPro();

console.log(isAVP);
// true or false
```

## Link

- [Reference post (reddit)](https://www.reddit.com/r/visionosdev/comments/1azvzen/identifying_avp_users_on_web_pages)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
