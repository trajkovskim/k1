export const createPropeties = (properties: object) =>
  Object.entries(properties)
    .map(([property, value]) => `${property}: ${value}`)
    .join(';');
