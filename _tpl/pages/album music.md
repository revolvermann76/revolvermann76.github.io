<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter() %>
%% [[categories/music album]] %%
<% tpl.title(tp.file.title.replace(" (album music)", "")) %>
## Infos
<% tpl.properties([
	"artist",
	"composer",
	"year"
]) %>
## Songs
<%tp.file.cursor(1)%>

