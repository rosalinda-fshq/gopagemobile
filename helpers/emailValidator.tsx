export function emailValidator(input: string) {
  const emailRegex = /\S+@\S+\.\S+/;
  const mobileRegex = /^\+?[1-9]\d{1,14}$/; // This regex matches E.164 international phone number format

  if (!input) return "Please fill in this field.";

  const isEmail = emailRegex.test(input);
  const isMobile = mobileRegex.test(input);

  if (!isEmail && !isMobile)
    return "Please enter a valid email address or mobile number!";

  return "";
}
