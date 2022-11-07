<%*
const tpl =  tp.user.tplHelper(tp);
%><% tpl.frontMatter() %>
%% [[categories/movie]], [[tv series]] %%
<% tpl.title(tp.file.title.replace(" (tv series)", "")) %>
<%tp.file.cursor(1)%>
