[@uncrypt/simple-aes](../README.md) / AesCbcEncryptor

# Class: AesCbcEncryptor

## Implements

- [`IEncryptor`](../interfaces/IEncryptor.md)<[`AesEncryptedResult`](../README.md#aesencryptedresult)\>

## Table of contents

### Constructors

- [constructor](AesCbcEncryptor.md#constructor)

### Methods

- [decrypt](AesCbcEncryptor.md#decrypt)
- [encrypt](AesCbcEncryptor.md#encrypt)

## Constructors

### constructor

• **new AesCbcEncryptor**(`password`)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

## Methods

### decrypt

▸ **decrypt**(`«destructured»`): `string`

#### Parameters

| Name             | Type                                                    |
| :--------------- | :------------------------------------------------------ |
| `«destructured»` | [`AesEncryptedResult`](../README.md#aesencryptedresult) |

#### Returns

`string`

**`Throws`**

DecryptError

#### Implementation of

[IEncryptor](../interfaces/IEncryptor.md).[decrypt](../interfaces/IEncryptor.md#decrypt)

---

### encrypt

▸ **encrypt**(`text`): [`AesEncryptedResult`](../README.md#aesencryptedresult)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

[`AesEncryptedResult`](../README.md#aesencryptedresult)

**`Throws`**

EncryptError

#### Implementation of

[IEncryptor](../interfaces/IEncryptor.md).[encrypt](../interfaces/IEncryptor.md#encrypt)
