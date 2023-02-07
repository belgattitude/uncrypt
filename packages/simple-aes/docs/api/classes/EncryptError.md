[@uncrypt/simple-aes](../README.md) / EncryptError

# Class: EncryptError

## Hierarchy

- `Error`

  ↳ **`EncryptError`**

## Table of contents

### Constructors

- [constructor](EncryptError.md#constructor)

### Properties

- [cause](EncryptError.md#cause)
- [message](EncryptError.md#message)
- [name](EncryptError.md#name)
- [stack](EncryptError.md#stack)
- [prepareStackTrace](EncryptError.md#preparestacktrace)
- [stackTraceLimit](EncryptError.md#stacktracelimit)

### Methods

- [captureStackTrace](EncryptError.md#capturestacktrace)

## Constructors

### constructor

• **new EncryptError**(`message`)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `message` | `string` |

#### Overrides

Error.constructor

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

---

### message

• **message**: `string`

#### Inherited from

Error.message

---

### name

• **name**: `string`

#### Inherited from

Error.name

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
