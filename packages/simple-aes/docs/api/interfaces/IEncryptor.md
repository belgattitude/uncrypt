[@uncrypt/simple-aes](../README.md) / IEncryptor

# Interface: IEncryptor<T\>

## Type parameters

| Name |
| :--- |
| `T`  |

## Implemented by

- [`AesCbcEncryptor`](../classes/AesCbcEncryptor.md)

## Table of contents

### Methods

- [decrypt](IEncryptor.md#decrypt)
- [encrypt](IEncryptor.md#encrypt)

## Methods

### decrypt

▸ **decrypt**(`encrypted`): `string`

**`Throws`**

DecryptError

#### Parameters

| Name        | Type |
| :---------- | :--- |
| `encrypted` | `T`  |

#### Returns

`string`

---

### encrypt

▸ **encrypt**(`text`): `T`

**`Throws`**

EncryptError

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

`T`
