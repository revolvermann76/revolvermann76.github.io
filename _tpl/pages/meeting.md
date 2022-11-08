<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter() %>
<% tpl.title(tp.file.title.substring(13)) %>

---
**Date:** <% tp.date.now("YYYY-MM-DD HH:mm") %>

**Attendees:**
  - <%tp.file.cursor(1)%>
---

## Goals / agenda
1. 

## Discussion notes
- 

## Action items
- [ ] 
