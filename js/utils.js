// handy function to create links in the markdown text
// via: https://stackoverflow.com/a/3890175/1167783
function linkify(str) {
  // urls starting with http://, https://, or ftp://
  let httpPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  str = str.replace(httpPattern, '<a href="$1" target="_blank">$1</a>');

  // urls starting with "www." (without // before it, or it'd re-link the ones done above)
  let wwwPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  str = str.replace(wwwPattern, '$1<a href="http://$2" target="_blank">$2</a>');

  // change email addresses to mailto: links
  let emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  str = str.replace(emailPattern, '<a href="mailto:$1">$1</a>');

  return str;
}

function linkify2(inputText) {
    //URLs starting with http://, https://, or ftp://
    var replacePattern1 = /(\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi;
    var replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with www. (without // before it, or it'd re-link the ones done above)
    //var replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    //var replacedText = replacedText.replace(replacePattern2, '<a href="$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links
    //var replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
    //var replacedText = replacedText.replace(replacePattern3, '&lt;a href=&quot;mailto:$1&quot;&gt;$1&lt;/a&gt;');

    return replacedText
}

// handy function to create links in the markdown text
// via: https://stackoverflow.com/a/3890175/1167783
function linkify3(str) {
  // urls starting with http://, https://, or ftp://
  let httpPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  str = str.replace(httpPattern, '<a href="$1" target="_blank">$1</a>');

  // urls starting with "www." (without // before it, or it'd re-link the ones done above)
  let wwwPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  str = str.replace(wwwPattern, '$1<a href="http://$2" target="_blank">$2</a>');

  // change email addresses to mailto: links
  let emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  str = str.replace(emailPattern, '<a href="mailto:$1">$1</a>');

  return str;
}


// a little function to get only the domain from a full url
// https://stackoverflow.com/a/8498668/1167783
function getDomain(url) {
  let a = document.createElement('a');
  a.href = url;
  return a.hostname;
}

