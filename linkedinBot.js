  a = setInterval(function () {
        window.scrollTo(0,document.body.scrollHeight);
        $("button.bt-request-buffed[data-act='request']").click();
      }, 3000);
    