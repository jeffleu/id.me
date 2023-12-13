// Formats date into "month day, year" format
export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

// Format description
export const formatDescription = (description) => {
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(`<!doctype html><body>${description}`, 'text/html').body.textContent;
  return decodedText;
};

// Formats price to include $ and commas
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};
