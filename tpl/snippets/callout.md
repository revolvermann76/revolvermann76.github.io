<%*
let types = [
  "ATTENTION",
  "ABSTRACT",
  "BUG",
  "CAUTION",
  "CHECK",
  "CITE",
  "DANGER",
  "DONE",
  "ERROR",
  "EXAMPLE",
  "FAIL",
  "FAILURE",
  "FAQ",
  "HELP",
  "HINT",
  "IMPORTANT",
  "INFO",
  "MISSING",
  "NOTE",
  "QUESTION",
  "QUOTE",
  "SUCCESS",
  "SUMMERY",
  "TIP",
  "TLDR",
  "WARNING",
]
let calloutType =  await tp.system.suggester(types, types);
calloutType = calloutType || "NOTE";
%>
> [!<%calloutType%>] <%tp.file.cursor(1)%>