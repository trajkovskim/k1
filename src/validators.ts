export type ValidatorValue = string | undefined;

export type Validator<Value = string, T = unknown> = (value: Value, allValues?: T) => ValidatorReturn;

export type ValidatorReturn = string | undefined;

type Message = {
  message: string;
};

export const combine =
  <Value, T>(validators: Validator<Value, T>[]) =>
  (value: Value, allValues: T) => {
    for (const validator of validators) {
      const message = validator(value, allValues);
      if (message) {
        return message;
      }
    }

    return undefined;
  };

type WithMessageValidator<M extends Message = Message, Value = string, T = unknown> = (
  params: M
) => Validator<Value, T>;

export const requiredValidator: WithMessageValidator =
  ({ message }) =>
  (value) => {
    const trimedValue = value?.trim();
    return trimedValue === '' || trimedValue === null || trimedValue === undefined ? message : undefined;
  };
