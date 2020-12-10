$("#loader").hide();

function showResult(res) {
  $("#res").val(res);
}

function getUrl(url) {
  let promise = new Promise((resolve, reject) => {
    $("#loader").show();
    $.ajax({
      type: "POST",
      url: "https://cleanuri.com/api/v1/shorten",
      data: { url: url },
      success: function (response) {
        var data = response;
        resolve(data);
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
  return promise;
}

$("#btn").click(function (e) {
  var longLink = $("#inpt").val();
  getUrl(longLink)
    .then((response) => {
      showResult(response["result_url"]);
      $("#loader").hide();
    })
    .catch((err) => {
      showResult("Have Error");
      $("#loader").hide();
    });
});

function addToClipBoard() {
  var copyText = document.getElementById("res");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
