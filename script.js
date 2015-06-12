var orders = [];
var length = 0;
var current_length = 0;
(function(){
  length = $('.mybid-table tbody tr').length;

  $('.mybid-table tbody tr').each(function(v){
    var url = $(this).find('.bk12').attr('href');
    //debugger;
    // console.log(url);
    var order = {};

    $(this).find('td').each(function(k,v){
      order[k] = $(v).html();
    });

    $.get(url, function(res){
      var spec = $(res).find('.custom_spec .spec').html()
      order.spec = spec;
      orders.push(order);
      current_length++;
    });
  });

 

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}
var interval = setInterval(function(){
  if(length === current_length){
    clearInterval(interval);
    download('yooo.json', JSON.stringify(orders));
  }
  
},1);

})()
