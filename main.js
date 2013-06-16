$(function(){
  ws = new WebSocket("ws://localhost:5123");
  ws.onmessage = function(evt){
    $("#msg").append(evt.data+"<br />");
  };
  ws.onclose = function(){
    console.log("finished");
  };
  ws.onopen = function(){
    ws.send($("#name").val()+"が参加しました。");
  };
  $("#input").keypress(function(e){
    if(e.keyCode==13){
      var str = $("#name").val()+":"+$("#input").val();
      ws.send(str);
      $("#input").val("");
    };
  });
});
