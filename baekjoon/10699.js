const options = {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const formatter = new Intl.DateTimeFormat('en-US', options);

const parts = formatter.formatToParts(new Date());
const year = parts.find(part => part.type === 'year').value;
const month = parts.find(part => part.type === 'month').value;
const day = parts.find(part => part.type === 'day').value;

console.log(`${year}-${month}-${day}`);
