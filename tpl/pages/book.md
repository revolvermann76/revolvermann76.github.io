<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter({other : {banner:'"![[book.png]]"'}}) %>
%% [[categories/book]] %%
<% tpl.title(tp.file.title.replace(" (book)", "")) %>
<% tpl.properties([
	"author",
	"year",
	"publisher",
	"place",
	"edition",
	"ISBN"
]) %>
## Summary
<% tp.file.cursor(1) %>

## Impressions



