eded
====

html editor in a data url that can edit itself

##Opening

Visit this url to load the current version

    data:text/html,<script>function l(r){location="data:text/html;charset=utf-8;base64,"+r.data.content}</script><script src="https://api.github.com/repos/croddin/eded/contents/eded.html?callback=l"></script>
 
##Features


* __Live updataing__ Check or uncheck "live update" to make it so the page is rendered as you type.
* __Customizable__ Just click "edit self" and you can easily change eded to fit your needs. If you make a cool change, send a pull request!
* __Visit your page__ You can click "visit" or right click and open in a new tab to see the results of your work in a new data url page.
* __Powerful editor__ eded uses [ace](http://ace.c9.io/) for html editing
