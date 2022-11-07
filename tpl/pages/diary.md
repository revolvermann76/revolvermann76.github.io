---
tags: diary
created: "<% tp.date.now("YYYY-MM-DD HH:mm", 1) %>"
banner: "![[calendar.jpg]]"
---
%% [[<% tp.date.now("YYYY", 1) + " (year)" %>]] %%
<%* 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let title = "";
console.log(tp.file.title.substr(0,4)+"-"+tp.file.title.substr(4,2)+"-"+tp.file.title.substr(6,2))

let today = new Date(tp.file.title.substr(0,4)+"-"+tp.file.title.substr(4,2)+"-"+tp.file.title.substr(6,2));
%>
# <%weekday[today.getDay()]+", " + today.getDate() + ". "+ monthNames[today.getMonth()] + " "  + (today.getYear()+1900)%>
<%tp.file.cursor(1)%>

## Feelings


## Upside


## Downside


## Thoughts


## Tasks