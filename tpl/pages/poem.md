<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter({other : {banner:'"![[poem.png]]"'}}) %>
%% [[categories/poem]] %%
<% tpl.title(tp.file.title.replace(" (poem)", "")) %>
<% tpl.properties([
	"poet",
	"year",
]) %>

<% tp.file.cursor(1) %>