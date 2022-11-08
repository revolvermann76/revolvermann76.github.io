module.exports = function(tp){
  const dateFormat = "YYYY-MM-DD HH:mm";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function capitalizeFirstLetters(string) {
    let parts = string.split(" ");
    for(let i = 0; i < parts.length; i++){
      parts[i] = capitalizeFirstLetter(parts[i]);
    }
    return parts.join(" ");
  }

  function title(title){
    return "# "+ (title ? title : tp.file.title);
  }

  function frontMatter(options){
    const presets = {
      aliases :true,
      created :true,
      tags: true,
      other : {}
    };
    options = Object.assign({}, presets, options);
    let fm = "---\n";

    if(options.aliases){
      fm += "aliases: ";
      if(Array.isArray(options.aliases)){
        fm += options.aliases.join(", ") + "\n";
      }else {
        fm += "\n";
      }
    }

    if(options.created){
      fm += "created: " + tp.date.now(dateFormat, 1) + "\n";
    }

    if(options.tags){
      fm += "tags: ";
      if(Array.isArray(options.tags)){
        fm += options.tags.join(", ") + "\n";
      }else {
        fm += "\n";
      }
    }

    const otherKeys = Object.keys(options.other);
    if(otherKeys){
      for(let i = 0; i < otherKeys.length; i++){
        const key = otherKeys[i];
        console.log(key)
        fm += key + ": " + (options.other[key]||"") + "\n";
      }
    }

    return fm + "---";
  }

  function properties(propArray){
    let propTable = "";
    for(let i = 0; i < propArray.length; i++){
      if(typeof propArray[i] === "string"){
        let splitted = propArray[i].split(":");
        if(splitted[0]){
          propTable += "\n>"+splitted[0].trim()+": ";
          if(splitted[1]){
            propTable += splitted[1].trim();
          }
        }
      }
    }
    propTable += "\n\n";
    return propTable;
  }

  async function appendFileName(appendix){
    await tp.file.rename(tp.file.title+" "+appendix);
  }

  return {
    title : title,
    frontMatter : frontMatter,
    properties : properties,
    appendFileName: appendFileName
  }
}