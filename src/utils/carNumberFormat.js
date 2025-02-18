export function formatCarNumber(carNumber) {
  // 50 555 RRR formatini tekshirish (2 ta raqam, 3 ta raqam, 3 ta harf)
  const regex1 = /^(\d{2})(\d{3})([A-Z]{3})$/;

  // 50 R 555 RR formatini tekshirish (2 ta raqam, 1 ta harf, 3 ta raqam, 2 ta harf)
  const regex2 = /^(\d{2})([A-Z]{1})(\d{3})([A-Z]{2})$/;

  if (regex1.test(carNumber)) {
    const [, part1, part2, part3] = carNumber.match(regex1);
    return `${part1} ${part2} ${part3}`; // 50 555 RRR
  } else if (regex2.test(carNumber)) {
    const [, part1, part2, part3, part4] = carNumber.match(regex2);
    return `${part1} ${part2} ${part3} ${part4}`; // 50 R 555 RR
  } else {
    return "Invalid car number format";
  }
}
