eded
====

html editor in a data url that can edit itself

## Opening

Visit this url to load the current version

    data:text/html,<iframe style="width:100%;height:100%;"></iframe><script>function l(r){document.querySelector('iframe').src="data:text/html;charset=utf-8;base64,"+r.data.content}</script><script src="https://api.github.com/repos/croddin/eded/contents/eded.html?callback=l"></script>
 
## Features


* __Live updating__ Check or uncheck "Update when i type" to make it so the page is rendered as you type.
* __Customizable__ Just click "Edit Editor" and you can easily change eded to fit your needs. If you make a cool change, send a pull request!
* __Visit your page__ You can click "Visit" or right click and open in a new tab to see the results of your work in a new data url page.
* __Powerful editor__ eded uses [Monaco](https://microsoft.github.io/monaco-editor/), the editor that powers Visual Studio Code, for html editing.
