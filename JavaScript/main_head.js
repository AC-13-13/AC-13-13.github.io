
function begin_main_website(name,main_name="AC-13-13",main_connect=" - ")
{
    var out = '<title>' + name + main_connect + main_name + '</title>'+
        '<meta name="keywords" content="GitHub, github, Blog, blog, 博客, ' + main_name+ ' " > '+
        '<meta name="description" content=' + main_name + ' \'s Blog >'+
        '<meta name="author" content=' + main_name +' > ' +
        '<link rel="icon"  href="../Image/icon.png">'
    document.write(out);
}
