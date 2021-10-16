export default function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
  // Olhei sobre o regex para email, neste link:
  // https://www.w3resource.com/javascript/form/email-validation.php
}
