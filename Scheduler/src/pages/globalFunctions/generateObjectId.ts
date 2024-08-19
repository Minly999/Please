export const generateObjectId = () => {
    return Math.floor(Math.random() * Math.pow(16, 24)).toString(16).padStart(24, '0');
  };