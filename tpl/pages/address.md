<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter() %>
%% [[categories/address]] %%
<% tpl.title() %>
<% tpl.properties([
	"street",
	"town",
	"country",
	"zip",
	"phone",
	"mobile phone",
	"email"
]) %>
<%tp.file.cursor(1)%>