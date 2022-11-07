<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter({other : {banner:'"![[book.png]]"'}}) %>
%% [[categories/movie]] %%
<% tpl.title(tp.file.title.replace(" (movie)", "")) %>
<% tpl.properties([
	"regie",
	"year",
	"publisher",
]) %>
## Cast
| Actor | Role |
| ----- | ---- |
|       |      |

## Summary
<%tp.file.cursor(1)%>



