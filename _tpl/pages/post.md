<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter({
	other: {
		title : "",
		layout: "post",
	},
	aliases: false
}) %>
<%tp.file.cursor(1)%>