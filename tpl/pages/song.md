<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter({other : {banner:'"![[song.png]]"'}}) %>
%% [[categories/song]] %%
<% tpl.title(tp.file.title.replace(" (song)", "")) %>
<% tpl.properties([
	"artist",
	"composer",
	"album",
	"year",
]) %>
## Lyrics
<% tp.file.cursor(1) %>

