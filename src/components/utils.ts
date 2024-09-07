export const createPropeties = (properties: object): string => {
  return Object.entries(properties)
    .map(([property, value]) =>
      typeof value === 'object' ? `${property} {${createPropeties(value)}}` : `${property}: ${value}`
    )
    .join(';');
};
