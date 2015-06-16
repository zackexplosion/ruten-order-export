# ruten-order-export

## 使用

首先，新增一個書籤

接著將URL內容改為下面的程式碼，接著將書籤放在好按的地方

``` javascript
javascript:var orders=[],length=0,current_length=0;!function(){function t(t,e){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}length=$(".mybid-table tbody tr").length,$(".mybid-table tbody tr").each(function(){var t=$(this).find(".bk12").attr("href"),e={};$(this).find("td").each(function(t,n){e[t]=$(n).html()}),$.get(t,function(t){var n=$(t).find(".custom_spec .spec").html();e.spec=n,orders.push(e),current_length++})});var e=setInterval(function(){length===current_length&&(clearInterval(e),t("yooo.json",JSON.stringify(orders)))},1)}();
```

*示意圖*

![Imgur](http://i.imgur.com/hxm6sKd.png)

到訂單總覽的頁面之後，按下書籤，完成後會下載`yoo.json`檔案

*示意圖*

![Imgur](http://i.imgur.com/wPOlu1K.png)


最後，將檔案內容到<https://json-csv.com/>貼上，即可產生表格

## 未來功能

聽說要改成 chrome 外掛
