<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter() %>
%% [[categories/person]] %%
<% tpl.title() %>
<% tpl.properties([
	"street",
	"town",
	"country",
	"zip",
	"phone",
	"mobile phone",
	"email",
	"birth",
	"death",
	"maiden-name",
	"parents",
	"children",
	"partner",
	"siblings"
]) %>
<%tp.file.cursor(1)%>