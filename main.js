$(function(){
  ws = new WebSocket("ws://localhost:5123");
  ws.onmessage = function(evt){
    $("#msg").append("<p>"+evt.data+"</p> ");
    $("#msg").scrollTop($("#msg")[0].scrollHeight);
    $("p:last").css({'backgroundColor': 'yellow'}).
    animate({'backgroundColor': 'white'}, 1000);
  };
  $("#input").keypress(function(e){
    if(e.keyCode==13){
      var str = $("#name").val()+": "+$("#input").val();
      ws.send(str);
      $("#input").val("");
    };
  });
});
