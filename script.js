$('#loader').hide();
function setResult(res) {
  $("#res").val(res);
  
}

function getUrl(url) {
  $('#loader').show()
  $.ajax({
    type: "POST",
    url: "https://cleanuri.com/api/v1/shorten",
    data: { url: url },
    success: function (response) {
      var ter = response;
      setResult(ter['result_url']);
      $('#loader').hide()
    },
  });
}

$("#btn").click(function (e) {
  var longLink = $("#inpt").val();
  getUrl(longLink);
  setResult('')
});

function addClipBoard() { 
  var copyText = document.getElementById('res');
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};
 