$('#loader').hide();
function setResult(res, n=0) {
  $("#res").html(res);
  
}

function getUrl(url) {
  $('#loader').show()
  $.ajax({
    type: "POST",
    url: "https://cleanuri.com/api/v1/shorten",
    data: { url: url },
    success: function (response) {
      var ter = response;
      setResult(ter['result_url'], 0);
      $('#loader').hide()
    },
  });
}

$("#btn").click(function (e) {
  var longLink = $("#inpt").val();
  getUrl(longLink);
  setResult('', 1)
});
