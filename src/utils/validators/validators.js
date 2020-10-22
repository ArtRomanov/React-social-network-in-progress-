
export const required = value => (value  ? undefined : 'Required')


  export const maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

