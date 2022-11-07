const dateFormat = "YYYY-MM-DD HH:mm";

function now(tp){
  return tp.date.now(dateFormat, 1);
}

function h1(title){
  return "# "+title+"\n";
}

function h2(title){
  return "## "+title+"\n";
}

function related(...args){
  args = args.map((a)=>{
    return "[["+a+"]]"
  });
  const joined = args.join(", ");
  return joined.length ? "%% "+ joined + " %%\n" : "";
}

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

function createFrontMatter(tp, tags, aliases, otherMap){
  let other = "";
  if(otherMap){
    for(key in otherMap){
      other+= "\n"+key+": " + otherMap[key]
    }
  }
  return `---
aliases: ${aliases ? aliases.join(","): ""}
tags: ${tags ? tags.join(","): ""}
created: "${now(tp)}"${other}
---
`;
}

function createPropertyTable(propArray){
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

function songTemplate(tp, fileTitle){
  return createFrontMatter(tp, null, null, { banner : '"![[song.png]]"'}) + 
    related("categories/song") +
    h1(fileTitle) + 
    createPropertyTable([
      "artist", 
      "composer", 
      "album", 
      "year", 
    ])+
    h2("Lyrics");
}

function bookTemplate(tp, fileTitle){
  return createFrontMatter(tp, null, null, { banner : '"![[book.png]]"'}) + 
    related("categories/book") +
    h1(fileTitle) + 
    createPropertyTable([
      "author",
      "year",
      "publisher",
      "place",
      "edition",
      "ISBN",
    ])+
    h2("Summary")+ "\n"+
    h2("Impressions")+ "\n"
}

function addressTemplate(tp, fileTitle){
  return createFrontMatter(tp) + 
    related("categories/address")+
    h1(fileTitle) +  
    createPropertyTable([
      "street",
      "town",
      "country",
      "zip",
      "phone",
      "mobile phone",
      "email"
    ])
}

function movieTemplate(tp, fileTitle){
  return createFrontMatter(tp) + 
  related("categories/movie")+
  h1(fileTitle) +  
  createPropertyTable([
    "regie",
    "year",
    "publisher"
  ])+
  h2("Cast")+
  "| Actor | Role |\n| ----- | ---- |\n|       |      |\n\n"+
  h2("Summary");
}

function poemTemplate(tp, fileTitle){
  return createFrontMatter(tp, null, null, { banner : '"![[poem.png]]"'}) + 
  related("categories/poem")+
  h1(fileTitle) +  
  createPropertyTable([
    "poet",
    "year"
  ]);
}

function bandTemplate(tp, fileTitle){
  return createFrontMatter(tp) + 
    related("categories/band")+
    h1(fileTitle) +  
    h2("Members")+
    h2("Releases")+
    "| year | album |\n| ---- | ----- |\n|      |       |\n";
}

function noteTemplate(tp, fileTitle){
  return createFrontMatter(tp) + 
    related()+
    h1(fileTitle)
}

function jokeTemplate(tp, fileTitle){
  return createFrontMatter(tp) + 
    related("category/joke")+
    h1(fileTitle) +  
    "\n> [!INFO] Joke\n> ";
}

function personTemplate(tp, fileTitle, bool_fellow){
  let rels = ["categories/person"];
  if(bool_fellow){
    rels.push("categories/fellow");
  }
  return createFrontMatter(tp) + 
    related.apply(this, rels)+
    h1(capitalizeFirstLetters(fileTitle)) +  
    createPropertyTable([
      "street",
      "zip",
      "town",
      "country",
      "phone",
      "mobile phone",
      "email",
      "birth",
      "death",
      "maiden-name",
      "parents",
      "partner",
      "children",
      "siblings",
    ]);
}

module.exports = function(tp){
  return {
    now: function(){
      return now(tp);
    },

    templateTypes : [
      "address", 
      "band",  
      "book", 
      "fellow",
      "movie", 
      "person", 
      "poem", 
      "song",
      "joke" 
    ],

    songTemplate : function(fileTitle){
      return songTemplate(tp, fileTitle);
    },

    bookTemplate : function(fileTitle){
      return bookTemplate(tp, fileTitle);
    },

    addressTemplate : function(fileTitle){
      return addressTemplate(tp, fileTitle);
    },

    movieTemplate :  function(fileTitle){
      return movieTemplate(tp, fileTitle);
    },

    poemTemplate :  function(fileTitle){
      return poemTemplate(tp, fileTitle);
    },

    bandTemplate :  function(fileTitle){
      return bandTemplate(tp, fileTitle);
    },

    noteTemplate :  function(fileTitle){
      return noteTemplate(tp, fileTitle);
    },

    personTemplate :  function(fileTitle, bool_fellow){
      return personTemplate(tp, fileTitle, bool_fellow);
    },


    jokeTemplate : function (fileTitle){
      return jokeTemplate(tp, fileTitle);
    },
    
    capitalizeFirstLetter : capitalizeFirstLetter,

    capitalizeFirstLetters : capitalizeFirstLetters,

    createFrontMatter : function(tags, aliases, otherMap){ 
      return createFrontMatter(tp, tags, aliases, otherMap);
    }

  }
};

