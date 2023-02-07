[@uncrypt/simple-aes](../README.md) / WeakPasswordError

# Class: WeakPasswordError

## Hierarchy

- `Error`

  ↳ **`WeakPasswordError`**

## Table of contents

### Constructors

- [constructor](WeakPasswordError.md#constructor)

### Properties

- [cause](WeakPasswordError.md#cause)
- [message](WeakPasswordError.md#message)
- [name](WeakPasswordError.md#name)
- [stack](WeakPasswordError.md#stack)
- [prepareStackTrace](WeakPasswordError.md#preparestacktrace)
- [stackTraceLimit](WeakPasswordError.md#stacktracelimit)

### Methods

- [captureStackTrace](WeakPasswordError.md#capturestacktrace)

## Constructors

### constructor

• **new WeakPasswordError**(`message`)

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
