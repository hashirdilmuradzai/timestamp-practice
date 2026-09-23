// let date = new Date();
let now = new Date(2026, 8, 23);

console.log(now);

// now = now.getUTCHours();

console.log(now);

console.log("Date + Time + Timezone:", now.toString()); // Date + time + timezone sab deta hai.
console.log("Sirf Date:", now.toDateString()); // Sirf date deta hai. Time aur timezone hata deta hai.
console.log("Sirf Time + Timezone:", now.toTimeString()); // Sirf time + timezone deta hai.
console.log("Standard UTC date/time format:", now.toISOString()); // Date ko ISO 8601 format mein deta hai.

// Birthday Calculation

let date = new Date();
let birthday = new Date("2002-1-24");
